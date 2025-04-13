// src/app/(routes)/login/page.tsx
import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In | Authentico",
  description: "Sign in to your Authentico account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8F5F0]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <LoginForm />
      </div>
    </div>
  );
}
