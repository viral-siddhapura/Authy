"use client";

import { logout } from "@/actions/logout";

interface LogOutButtonProps {
    children?: React.ReactNode;
};

export const LogOutButton = ({
    children
} : LogOutButtonProps ) => {

    const onClick = () => {
        logout();
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}