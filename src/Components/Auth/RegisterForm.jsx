"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/app/actions/server/auth";
import { SocialButtons } from "./SocialButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Create user
      const result = await postUser(form);

      if (result.acknowledged) {
        // ✅ Auto login using NextAuth credentials
        const loginRes = await signIn("credentials", {
          email: form.email,
          password: form.password,
          redirect: false,
        });

        if (loginRes.ok) {
          Swal.fire("Success", "Account created & logged in!", "success");
          router.push("/"); // redirect to homepage (navbar updates)
        } else {
          Swal.fire(
            "Success",
            "Account created, but login failed. Please login manually.",
            "warning"
          );
          router.push("/login");
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong. Try again.", "error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 rounded-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full rounded-lg"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-lg pr-10"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-lg"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          {/* Social Login */}
          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
