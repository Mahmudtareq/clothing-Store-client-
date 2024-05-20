"use client";
import { Home, Package, Package2, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../asserts/logo1.jpeg";

const SidebarDesktop = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
       
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="mb-3">
              <Link
                href="/dashboard"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  pathname === "/dashboard" ? "bg-accent border" : ""
                }`}
              >
                <Home className="h-6 w-6" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="mb-3">
              <Link
                href="/dashboard/all-products"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  pathname === "/dashboard/all-products"
                    ? "bg-accent border"
                    : ""
                }`}
              >
                <Package className="h-6 w-6" />

                <span className="sr-only">All Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">All Products</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default SidebarDesktop;
