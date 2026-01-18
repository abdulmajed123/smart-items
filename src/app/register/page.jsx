// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const form = e.target;
//     const user = {
//       name: form.name.value,
//       email: form.email.value,
//       password: form.password.value,
//       image: form.image.value,
//     };

//     if (!user.name || !user.email || !user.password) {
//       setError("All required fields must be filled");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Something went wrong");
//         setLoading(false);
//         return;
//       }

//       // success
//       form.reset();
//       router.push("/login"); // redirect to login page
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again.");
//       setLoading(false);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center mb-1">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-4">
//             Join SmartItems today
//           </p>

//           <form onSubmit={handleRegister} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="label font-semibold">Full Name</label>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="label font-semibold">Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="label font-semibold">Password</label>
//               <div className="relative">
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter password"
//                   className="input input-bordered w-full pr-10"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div>
//               <label className="label font-semibold">
//                 Profile Image URL{" "}
//                 <span className="text-gray-400">(optional)</span>
//               </label>
//               <input
//                 name="image"
//                 type="url"
//                 placeholder="https://example.com/photo.jpg"
//                 className="input input-bordered w-full"
//               />
//             </div>

//             {error && <p className="text-red-500">{error}</p>}

//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={loading}
//             >
//               {loading ? "Creating Account..." : "Register"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { RegisterForm } from "@/Components/Auth/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;
