import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children } : ProtectedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center
        justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 to-green-300">
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default ProtectedLayout;