import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (
    email: string,
    token: string,
) => {
    await resend.emails.send({
        to: email,
        from: "onboarding@resend.dev",
        subject: "Two-factor authentication",
        html: `<p>Your Two Factor Authentication Code:${token}</p>`,
    });
}

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {
    const resetPasswordLink = `http://localhost:3000/auth/reset-password?token=${token}`;

    await resend.emails.send({
        to: email,
        from: "onboarding@resend.dev",
        subject: "Reset your password",
        html: `<p>Click the link below to reset your password:</p><a href="${resetPasswordLink}">Reset your password</a>`,
    });
}

export const sendVerificationEmail = async (
    email: string,
    token: string,
) => {
    const confirmedLink = `http://localhost:3000/auth/confirm-email?token=${token}`;

    await resend.emails.send({
        to: email,
        from: "onboarding@resend.dev",
        subject: "Confirm your email address",
        html: `<p>Click the link below to confirm your email address:</p><a href="${confirmedLink}">Confirm your email</a>`,
    });

}