"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn bg-blue-500">
            LogOut
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"} className="btn btn-outline">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
