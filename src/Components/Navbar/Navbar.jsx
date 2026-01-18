// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   const links = (
//     <>
//       <li>
//         <Link href="/">Home</Link>
//       </li>
//       <li>
//         <Link href="/allProducts">All Products</Link>
//       </li>
//       <li>
//         <Link href="/addProduct">Add Product</Link>
//       </li>
//       <li>
//         <Link href="/about">About</Link>
//       </li>
//       <li>
//         <Link href="/contact">Contact</Link>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import LoginButton from "../Button/AuthButton";
import AuthButton from "../Button/AuthButton";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check auth cookie
  // useEffect(() => {
  //   const hasAuth = document.cookie.includes("auth=true");
  //   setIsLoggedIn(hasAuth);
  // }, []);

  // const handleLogout = async () => {
  //   document.cookie = "auth=; path=/; max-age=0";
  //   setIsLoggedIn(false);
  //   router.push("/login");
  // };

  const navLinkClass = (path) =>
    pathname === path ? "text-primary font-semibold" : "hover:text-primary";

  const links = (
    <>
      <li>
        <Link className={navLinkClass("/")} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={navLinkClass("/allProducts")} href="/allProducts">
          Products
        </Link>
      </li>
      <li>
        <Link className={navLinkClass("/addProduct")} href="/addProduct">
          Add Product
        </Link>
      </li>
      <li>
        <Link className={navLinkClass("/about")} href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className={navLinkClass("/contact")} href="/contact">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center font-bold">
            SI
          </div>
          <span className="text-xl font-bold">
            Smart<span className="text-primary">Items</span>
          </span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        <AuthButton></AuthButton>
      </div>
    </div>
  );
};

export default Navbar;
