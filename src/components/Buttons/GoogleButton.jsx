"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const GoogleButton = () => {
  const params = useSearchParams();
  const handleGoogleSignIn = async () => {
    // Google auth logic goes here
    console.log("Google Sign In clicked");
    const result = await signIn("google", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn btn-outline w-full flex items-center gap-2"
    >
      <FaGoogle className="text-red-500 text-lg" />
      Continue with Google
    </button>
  );
};

export default GoogleButton;
