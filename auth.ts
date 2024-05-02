import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { UserRole } from '.prisma/client';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from './lib/db';
import { getUserById } from './data/user';

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages:{
        signIn: '/auth/login',
        error: '/auth/error',
    },
    events: {
        async linkAccount({user}){
            await db.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerified: new Date(),
                },
            });
        }
    },
    callbacks: {

        // async signIn({ user }) {

        //     if (!user || !user.id) {
        //         console.log("No user or user id found in signIn callback", user);
        //         return false;
        //     }

        //     const existingUser = await getUserById(user.id);

        //     if (!existingUser || !existingUser.emailVerified) {
        //         console.log("User not found or email not verified", user);
        //         return false;
        //     }

        //     return true;
        // },

        async session( { token, session } ){
            console.log({
                sessionToken: token,
            })
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }
            return session;
        }
        ,
        async jwt({ token }){
            if (!token.sub){
                return token;
            }

            const exisitingUser = await getUserById(token.sub);
            if (!exisitingUser){
                return token;
            }
            
            token.role = exisitingUser.role;
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
});