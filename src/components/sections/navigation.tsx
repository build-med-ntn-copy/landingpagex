"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
  // { name: "Use cases", dropdown: true, href: "/use-cases" },
  // { name: "Resources", dropdown: true, href: "/resources" },
  { name: "Pricing", dropdown: false, href: "/pricing" },
  // { name: "Careers", dropdown: false, href: "/careers" },
  // { name: "Contact sales", dropdown: false, href: "/contact" }
];


  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="relative mx-auto flex h-16 max-w-[1280px] flex-row items-center px-6 md:h-[88px] lg:px-8">
        <Link href="/" aria-label="Merus logo" className="flex items-center text-2xl font-semibold text-primary !whitespace-pre-line !font-(family-name:--font-playfair-display)">Merus

        </Link>

        <nav className="hidden items-center gap-x-1.5 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navItems.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className="group inline-flex h-auto items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">

              {item.name}
              {item.dropdown &&
            <ChevronDown className="relative top-px ml-1 h-4 w-4 transition duration-200 group-hover:text-accent-foreground" />
            }
            </Link>
          )}
        </nav>

        <div className="hidden items-center gap-5 md:ml-auto md:flex">
          <Link href="/login" className="inline-flex h-auto items-center justify-center whitespace-nowrap rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Log in
          </Link>
          <Link href="/signup" className="inline-flex h-auto items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 !whitespace-pre-line">Get Merus free

          </Link>
        </div>

        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Toggle menu">

            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen &&
      <div className="border-t border-border bg-white md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center justify-between rounded-md px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent">

                {item.name}
                {item.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
          )}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Link href="/login" className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                Log in
              </Link>
              <Link href="/signup" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Get Merus free
              </Link>
            </div>
          </nav>
        </div>
      }
    </header>);

};

export default Navigation;