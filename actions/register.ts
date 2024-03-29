"use server" // This line usually added for server actions purpose
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!!" };
    }

    const { email, password, name } = validatedFields.data;
    // Hash the password first
    const hasedPassword = await bcrypt.hash(password, 10);

    // Get the existing user
    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        return { error: "Email already exists!!" };
    }

    // Create the user
    await db.user.create({
        data: {
            name,
            email,
            password: hasedPassword,
        },
    });

    // TODO: send verification email to the user

    return { success: "Congratulations, User Created!"};
}