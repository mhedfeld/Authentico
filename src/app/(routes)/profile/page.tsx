// src/app/(routes)/profile/page.tsx
import { Metadata } from "next";
import { ProfileDashboard } from "@/components/profile/profile-dashboard";

export const metadata: Metadata = {
  title: "My Profile | Authentico",
  description: "Manage your Authentico profile and authentication history",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8F5F0]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <ProfileDashboard />
      </div>
    </div>
  );
}
