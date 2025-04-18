"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface LoginResponseUser {
  id: number;
  username: string;
  password: string;
  profile: string;
  phoneNumber: string;
  isActive: string;
  firstName: string;
  lastName: string;
}

export const NavbarComponent = () => {
  const [user, setUser] = useState<LoginResponseUser | null>(null);

  useEffect(() => {
    const userFromStorage = sessionStorage.getItem("user");
    if (userFromStorage) {
      try {
        const parsedUser = JSON.parse(userFromStorage) as LoginResponseUser;
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from sessionStorage:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/login"; // or use router.push if using `next/navigation`
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link className="flex items-center" href="/">
              <img className="h-10 w-auto" src="/Reki.png" alt="Logo" />
              <p className="sr-only">Seu Blog</p>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link className="nav-link" href="/">Blogs</Link>
            <Link className="nav-link" href="/about-us">About Us</Link>
            <Link className="nav-link" href="#">Privacy</Link>
            <Link className="nav-link" href="#">Contact Us</Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            {user ? (
              <>
                <span className="text-sm text-gray-700">Hi, {user.firstName}</span>
                <button
                  onClick={handleLogout}
                  className="rounded-xl bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:inline-flex"
                  href="/login"
                >
                  Sign in
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
                  href="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
