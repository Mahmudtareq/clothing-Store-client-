"use client";
import { ToggleButton } from "@/components/themes/ToggleButton";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../asserts/logo1.jpeg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white dark:bg-gray-900  sticky  z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            className="rounded-lg"
            alt="E-shop Logo"
            height={40}
            width={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-Shop
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignRight className="w-6 h-6" />
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto lg:flex items-center lg:gap-4`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-blue-700 dark:text-white"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white  rounded md:bg-transparent  md:dark:bg-transparent"
                } `}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`${
                  pathname === "/products"
                    ? "text-blue-700 dark:text-white"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white  rounded md:bg-transparent  md:dark:bg-transparent"
                } `}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`${
                  pathname === "/login"
                    ? "text-blue-700 dark:text-white"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white  rounded md:bg-transparent  md:dark:bg-transparent"
                } `}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`${
                  pathname === "/dashboard"
                    ? "text-blue-700 dark:text-white"
                    : "block py-2 px-3 md:p-0 text-gray-900 dark:text-white  rounded md:bg-transparent  md:dark:bg-transparent"
                } `}
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="mt-4 lg:mt-0">
            <ToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
