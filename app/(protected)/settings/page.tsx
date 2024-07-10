"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const currentUser = useCurrentUser();
    
    const onClick = () => {
        logout();
    };

    return (
        <div className="bg-white p-3 rounded-xl">
            <form>
                <button onClick={onClick} type="submit">Sign Out</button>
            </form>
        </div>
    );
};

export default SettingsPage;