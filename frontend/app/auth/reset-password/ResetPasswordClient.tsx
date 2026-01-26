"use client";

import React, { useState, useEffect } from "react";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useResetPassword } from "../../../src/lib/auth/auth.queries";
import AuthLayout from "../../../src/components/layout/AuthLayout";
import { getAuthPageConfig } from "../../../config/authPagesConfig";
import SmartLink from "@/src/components/layout/SmartLink";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const resetPasswordMutation = useResetPassword();
  const pageConfig = getAuthPageConfig("login");

  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // const tokenFromUrl = searchParams.get("token");
    const tokenFromUrl = searchParams?.get("token") ?? null;
    setToken(tokenFromUrl);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newPassword || newPassword !== confirmPassword) return;
    resetPasswordMutation.mutate({ token, newPassword });
  };

  if (!token) {
    return (
      <AuthLayout
        backgroundImage={pageConfig.backgroundImage}
        testimonials={pageConfig.testimonials}
        title="Invalid Reset Link"
        subtitle="The password reset link is invalid or has expired"
        showTabs={false}
      >
        <div className="text-center">
          <SmartLink href="/auth/forgot-password" className="inline-flex items-center text-[#1B73E8] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Request New Reset Link
          </SmartLink>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      backgroundImage={pageConfig.backgroundImage}
      testimonials={pageConfig.testimonials}
      title="Reset Password"
      subtitle="Enter your new password below"
      showTabs={false}
    >
      {/* form stays EXACTLY the same */}
    </AuthLayout>
  );
}