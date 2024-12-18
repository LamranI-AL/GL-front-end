// "use client";
import Image from "next/image";
import React from "react";
// import { Button } from "../ui/button";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillProfile } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  // const cc = usePathname();
  // console.log(cc);
  return (
    <header className="bg-slate-500">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={"/LOGO.png"} width={100} alt="" height={100} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-200 transition hover:text-white"
                    href="#about"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-200 transition hover:text-white"
                    href="#populaire"
                  >
                    {" "}
                    Endroits populaires{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-200 transition hover:text-white"
                    href="/reservation"
                  >
                    {" "}
                    Vols{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-200 transition hover:text-white"
                    href="/"
                  >
                    {" "}
                    Aeroports{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-200 transition hover:text-white"
                    href="/admin"
                  >
                    {" "}
                    Dashboard{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="bg-transparent border rounded-full hover:bg-transparent">
                    <Image
                      src={"/LOGO.png"}
                      className="size-10 object-cover"
                      width={100}
                      alt=""
                      height={100}
                    />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <div className="p-2">
                        <Link
                          href="/"
                          className="rounded-lg flex px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          role="menuitem"
                        >
                          <AiFillProfile />
                          My profile
                        </Link>
                      </div>
                      <div className="p-2">
                        {/* <form method="POST" action="#"> */}
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                        {/* </form> */}
                      </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
