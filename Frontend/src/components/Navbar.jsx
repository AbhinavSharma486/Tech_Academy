import React, { useState, useEffect } from "react";
import { DirectNavigate, HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavMenu/NavMenu";
import { cn } from "../lib/utils";
import image_one from '../assets/LandingPageImage/HeroImages/tech_image_1.webp'
import image_two from '../assets/LandingPageImage/HeroImages/tech_image_2.jpg'

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
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
      "fixed top-10 mx-auto z-50",
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
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="CodeCraft Academy"
                  href="/"
                  src={image_one}
                  description="Master programming concepts with hands-on projects."
                />
                <ProductItem
                  title="DesignGenius"
                  href="/"
                  src={image_two}
                  description="Learn UI/UX design principles from industry experts."
                />
                <ProductItem
                  title="DataMind Pro"
                  href="/"
                  src={image_two}
                  description="Become a data analytics expert through real-world cases."
                />
                <ProductItem
                  title="CloudNinja"
                  href="/"
                  src={image_one}
                  description="Accelerate your cloud computing skills with certified mentors."
                />
              </div>
            </MenuItem>

          )
        }

        {/* <DirectNavigate route={'/'} RouteName={'Review'} /> */}
        <DirectNavigate route={'/contact-us'} RouteName={'Contact'} />

      </Menu>
    </div>
  );
}