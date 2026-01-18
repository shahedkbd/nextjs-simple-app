"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Handle photo upload preview
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
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

          {/* Full Name */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
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
              <span className="label-text">Photo URL (Optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo Upload */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Upload Photo (Optional)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer border border-dashed rounded-lg p-3 hover:bg-base-200">
              <FaUpload />
              <span className="text-sm">Choose a file</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>

          {/* Photo Preview */}
          {photoPreview && (
            <div className="flex justify-center mt-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={photoPreview} alt="Preview" />
                </div>
              </div>
            </div>
          )}

          {/* Register Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Create Account</button>
          </div>

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
