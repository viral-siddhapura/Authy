export default function NewPasswordLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full flex items-center justify-center
            bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 to-green-300">
            {children}
        </div>
    );

}