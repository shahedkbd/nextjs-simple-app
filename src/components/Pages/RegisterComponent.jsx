"use client";

import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import Swal from "sweetalert2";

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const callbackUrl = params.get("callbackurl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photourl = e.target.photourl.value;
    // const photoupload = e.target.photoupload.value;

    const newUser = {
      name,
      email,
      password,
      photo: photourl,
    };
    console.log(newUser);

    const result = await postUser(newUser);

    if (result.success) {
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: callbackUrl,
      });

      if (login.ok) {
        Swal.fire("Success", "Registered Successfully", "success");
        router.push(callbackUrl);
      }
    } else {
      Swal.fire("error", "এই gmail এ  একটি একাউন্ট আছে । লগিন করুন ", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center">
            Create Your Account
          </h2>
          <p className="text-center text-sm text-gray-500">
            Join us — it takes less than a minute
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            {/* Photo URL */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photourl" required
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
              />
            </div>

            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Create Account</button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span className="text-primary cursor-pointer hover:underline">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
