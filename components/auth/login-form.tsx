import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper 
            headerLabel={"Welcome Back"}
            backButtonLabel={"Don't have an account? Register here."}
            backButtonHref={"/auth/register"}
            showSocial
        >
            Login Form Here!!
        </CardWrapper>
    )
};