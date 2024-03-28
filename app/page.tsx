import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 to-green-300">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-black drop-shadow-md",
          font.className,
        )}>
          🔐 Auth
        </h1>
        <p className="text-black text-lg">
          A Simple Authentication Service
        </p>
        <div>
          <LoginButton>
            <Button variant={"default"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
