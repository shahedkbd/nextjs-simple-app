"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleButton from "../Buttons/GoogleButton";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center">
            Login to Your Account
          </h2>
          <p className="text-center text-sm text-gray-500">
            Welcome back — let’s get you signed in
          </p>

          {/* Email */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password with eye icon */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="form-control mt-5">
            <button className="btn btn-primary w-full">Login</button>
          </div>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <GoogleButton></GoogleButton>

          {/* Footer */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span className="text-primary cursor-pointer hover:underline">
              <Link href={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
