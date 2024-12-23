// "use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiFillProfile } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 via-slate-600 to-teal-500">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link className="block" href="/">
            <Image
              src="/LOGO.png"
              width={100}
              height={100}
              alt="Home"
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            <Link href="#about" className="hover:text-teal-300 transition">
              About
            </Link>
            <Link href="#populaire" className="hover:text-teal-300 transition">
              Popular Spots
            </Link>
            <Link
              href="/reservation"
              className="hover:text-teal-300 transition"
            >
              Flights
            </Link>
            <Link href="/" className="hover:text-teal-300 transition">
              Airports
            </Link>
            <Link href="/admin" className="hover:text-teal-300 transition">
              Dashboard
            </Link>
          </nav>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="p-2">
                  <Image
                    src="/invit.png"
                    width={40}
                    height={40}
                    alt="Profile"
                    className="rounded-full border border-teal-500 animate-pulse"
                  />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <Link
                      href="/"
                      className="flex items-center gap-2 p-2  rounded-md hover:bg-slate-200  transition"
                    >
                      <AiFillProfile /> My Profile
                    </Link>
                    <button
                      type="submit"
                      className="flex items-center gap-2 p-2 text-red-400 hover:bg-red-100 w-full rounded-md transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0112 0H3"
                        />
                      </svg>
                      Logout
                    </button>
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Mobile Menu */}
            <button className="md:hidden rounded bg-gray-200 p-2 text-gray-700 hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
