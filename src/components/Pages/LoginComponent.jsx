"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleButton from "../Buttons/GoogleButton";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (!result.ok) {
      Swal.fire(
        "error",
        "Email password not Matched . Try Google Login / Register",
        "error",
      );
    } else {
      Swal.fire("success", "Welcome to Kidz Hub", "success");
      router.push(callback);
    }
    setLoading(false);
  };

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

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
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
                  name="password"
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
          </form>

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
