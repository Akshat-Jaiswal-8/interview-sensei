"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
const Header = ({ logo }) => {
  const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="bg-background/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="w-[80%] m-auto flex gap-4 items-center justify-between py-4">
        <Link className="hidden md:block" href="/dashboard">
          <Image src={logo} width={80} height={80} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-6">
          <Link href="/dashboard">
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                path == "/dashboard" && "text-primary font-bold"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/question">
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                path == "/dashboard/question" && "text-primary font-bold"
              }`}
            >
              Questions
            </li>
          </Link>

          <Link href="/dashboard/upgrade">
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                path == "/dashboard/upgrade" && "text-primary font-bold"
              }`}
            >
              Upgrade
            </li>
          </Link>

          <Link href="/dashboard/howit">
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                path == "/dashboard/howit" && "text-primary font-bold"
              }`}
            >
              How it works?
            </li>
          </Link>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex gap-10">
          <ModeToggle />
          {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-5 py-3">
            <ul className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
              <Link href="/dashboard">
                <li
                  className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                    path == "/dashboard" && "text-primary font-bold"
                  }`}
                >
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/question">
                <li
                  className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                    path == "/dashboard/question" && "text-primary font-bold"
                  }`}
                >
                  Questions
                </li>
              </Link>
              <Link href="/dashboard/upgrade">
                <li
                  className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                    path == "/dashboard/upgrade" && "text-primary font-bold"
                  }`}
                >
                  Upgrade
                </li>
              </Link>
              <Link href="/dashboard/howit">
                <li
                  className={`hover:text-primary hover:font-bold transition-all cursor-pointer text-foreground ${
                    path == "/dashboard/howit" && "text-primary font-bold"
                  }`}
                >
                  How it works?
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
