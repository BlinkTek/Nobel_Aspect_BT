"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Header() {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: null },
    { name: "Case Studies", link: "/casestudy" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.nobleaspect.com/api/service/list`);
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to check if the link is active
  // const isActive = (path) => pathname === path || pathname.startsWith(path);
  const isActive = (path) => {
    if (path === "/") {
      // Home should only be active when the exact path is "/"
      return pathname === "/";
    }
    // For other paths, use startsWith to match parent and child routes
    return pathname.startsWith(decodeURIComponent(path));
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} disableAnimation isBordered isBlurred={false}>
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-black" />
        <NavbarBrand>
          <Link href="/" className="h-14">
            <Logo wordmark />
            <div className="hidden md:flex"></div>
            {/* <div className="md:hidden flex">
            <Logo />
          </div> */}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            {item.link ? (
              <Link
                color="foreground"
                href={item.link}
                className={`flex items-center justify-center min-w-fit h-10 text-small rounded-small ${
                  isActive(item.link) ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={`p-0 ${
                      isActive("/services") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                    } bg-transparent min-w-fit data-[hover=true]:bg-transparent`}
                    radius="sm"
                    variant="light"
                  >
                    Services
                  </Button>
                </DropdownTrigger>
                {!loading && (
                  <DropdownMenu
                    aria-label="ACME features"
                    className="w-full"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    {services.map((service) => (
                      <DropdownItem key={service.serviceTitle} className="focus:ring-black">
                        <a
                          href={`/services/${service.serviceTitle}`}
                          className={`flex gap-2 items-center py-1 ${
                            isActive(`/services/${service.serviceTitle}`) ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                          }`}
                        >
                          {service.serviceTitle}
                        </a>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </Dropdown>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/inquiry"
            variant="bordered"
            className={`text-sitePrimary-700 border border-sitePrimary-700 focus:!ring-0 ${
              isActive("/inquiry") ? "text-EffectRed border-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
            }`}
          >
            Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item.link === null ? (
              <>
                <Accordion isCompact>
                  <AccordionItem
                    title={
                      <p className={`w-full -m-2 ${isActive("/services") ? "text-EffectRed border-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"}`}>
                        {item.name}
                      </p>
                    }
                    indicator={
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="m14 7l-5 5m0 0l5 5"
                        />
                      </svg>
                    }
                  >
                    <div className="flex flex-col px-3">
                      {services.map((service) => (
                        <div key={service.serviceTitle}>
                          <a
                            href={`/services/${service.serviceTitle}`}
                            className={`flex gap-2 items-center py-1 ${
                              isActive(`/services/${service.serviceTitle}`) ? "text-EffectRed border-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                            }`}
                          >
                            <span
                              className={isActive(`/services/${decodeURIComponent(service.serviceTitle)}`) ? "text-EffectRed border-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"}
                            >{service.serviceTitle}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                </Accordion>
              </>
            ) : (
              <Link
                color="foreground"
                className={`w-full ${isActive(item.link) ? "text-EffectRed border-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"}`}
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
