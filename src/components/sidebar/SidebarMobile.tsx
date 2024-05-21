"use client";
import { Home, LayoutList, LineChart, Package, Package2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../asserts/logo1.jpeg";

const SidebarMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <div className="">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            className="rounded-lg"
            alt="E-shop Logo"
            height={40}
            width={40}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-Shop
          </span>
        </Link>
      </div>
      <Link
        href="/dashboard"
        className={` ${
          pathname === "/dashboard" ? "bg-accent border" : ""
        } flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="dashboard/all-products"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <LayoutList className="h-5 w-5" />
        All Products
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <LineChart className="h-5 w-5" />
        Settings
      </Link>
    </nav>
  );
};

export default SidebarMobile;
