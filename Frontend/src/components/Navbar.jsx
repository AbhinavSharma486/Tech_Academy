"use client";
import React, { useState, useEffect } from "react";
import { DirectNavigate, HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavMenu/NavMenu";
import { cn } from "../lib/utils";
import Logo from '../assets/Logo/Logo';

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mb-15">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    
    <div className={cn(
      "fixed top-10 left-4 right-4 md:left-20 md:right-20 max-w-5xl mx-auto z-50",
      className
    )}>
      <Menu setActive={setActive}>

        {/* Conditionally render Courses menu based on screen size */}
        {isMobile ? (
          <MenuItem
            setActive={setActive}
            active={active}
            item="Courses"
            hasDropdown
            submenu={[
              { label: "Web Development", href: "/web-dev" },
              { label: "Data Analytics", href: "/da" },
              { label: "DSA", href: "/dsa" },
              { label: "Programming", href: "/programming" },
            ]}
          />
        ) : (
          <MenuItem setActive={setActive} active={active} item="Courses" hasDropdown>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/da">Data Analytics</HoveredLink>
              <HoveredLink href="/dsa">DSA</HoveredLink>
              <HoveredLink href="/programming">Programming</HoveredLink>
            </div>
          </MenuItem>
        )}
        {
          isMobile ? (
            <MenuItem
              setActive={setActive}
              active={active}
              item="Mentors"
              hasDropdown
              submenu={[
                { label: "Algochurn", href: "/web-dev" },
                { label: "Tailwind Master Kit", href: "/da" },
                { label: "Moonbeam", href: "/dsa" },
                { label: "Rogue", href: "/programming" },
              ]}
            />
          ) : (
            <MenuItem setActive={setActive} active={active} item="Mentors" hasDropdown>
              <div className=" text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
          )
        }

        <DirectNavigate route={'/'} RouteName={'Review'} />
        <DirectNavigate route={'/'} RouteName={'Contact'} />

      </Menu>
    </div>
  );
}