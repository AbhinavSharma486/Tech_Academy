import React, { useState, useEffect } from "react";
import { DirectNavigate, HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavMenu/NavMenu";
import { cn } from "../lib/utils";
import image_one from '../assets/LandingPageImage/HeroImages/tech_image_1.webp';
import image_two from '../assets/LandingPageImage/HeroImages/tech_image_2.jpg';

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
              { label: "Java Full Stack", href: "/JavaFullStack" },
              { label: "Data Analytics", href: "/data-analytics" },
              { label: "MERN Full Stack", href: "/mern-fullstack" },
              { label: "Data Scient & AI", href: "/datascience&ai" },
            ]}
          />
        ) : (
          <MenuItem setActive={setActive} active={active} item="Courses" hasDropdown>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/JavaFullStack">Java Full Stack</HoveredLink>
              <HoveredLink href="/data-analytics">Data Analytics</HoveredLink>
              <HoveredLink href="/mern-fullstack">MERN Full Stack</HoveredLink>
              <HoveredLink href="/datascience&ai">Data Scient & AI</HoveredLink>
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

        {isMobile ? (
          <MenuItem
            setActive={setActive}
            active={active}
            item="More"
            hasDropdown
            submenu={[
              { label: "Success Stories", href: "/success_stories" },
              { label: "Refer & Earn", href: "/refer" },
            ]}
          />
        ) : (
          <MenuItem setActive={setActive} active={active} item="More" hasDropdown>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/success_stories">Success Stories</HoveredLink>
              <HoveredLink href="/refer">Refer & Earn</HoveredLink>
            </div>
          </MenuItem>
        )}

        {/* <DirectNavigate route={'/'} RouteName={'Review'} /> */}
        <DirectNavigate route={'/contact-us'} RouteName={'Contact'} />

      </Menu>
    </div>
  );
}