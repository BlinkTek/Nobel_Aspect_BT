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
} from "@nextui-org/react";
import Logo from "./Logo";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Services",
    "Case Study",
    "About us",
    "Contact us",
  ];

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "${process.env.NEXT_PUBLIC_API_URL}service/list"
      );
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

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      isBordered
      isBlurred={false}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarBrand>
          <Logo wordmark />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="flex items-center justify-center min-w-20 h-10 text-small rounded-small"
          >
            Home{" "}
          </Link>
        </NavbarItem>
        {/* Dropdown menu */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          {/* <DropdownMenu
            aria-label="ACME features"
            className="w-full"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="Digital Marketing" className="focus:ring-black">
              <a
                href="/services/digital_marketing"
                className="flex gap-2 items-center py-1  "
              >
                <Icon
                  icon="hugeicons:marketing"
                  width={20}
                  height={20}
                  className="text-sitePrimary-700"
                />
                <span className="text-gray-500 font-semibold">
                  Digital Marketing
                </span>
              </a>
            </DropdownItem>
            <DropdownItem key="Branding" className="focus:ring-black">
              <a
                href="/services/branding"
                className="flex gap-2 items-center py-1 "
              >
                <Icon
                  icon="tabler:brand-speedtest"
                  width={20}
                  height={20}
                  className="text-sitePrimary-700"
                />
                <span className="text-gray-500 font-semibold">Branding</span>
              </a>
            </DropdownItem>
            <DropdownItem key="Designing" className="focus:ring-black">
              <a
                href="/services/designing"
                className="flex gap-2 items-center py-1  "
              >
                <Icon
                  icon="iconoir:design-nib"
                  width={20}
                  height={20}
                  className="text-sitePrimary-700"
                />
                <span className="text-gray-500 font-semibold">Designing</span>
              </a>
            </DropdownItem>
          </DropdownMenu> */}

          {!loading && (
            <DropdownMenu
              aria-label="ACME features"
              className="w-full"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {services.map((service, index) => (
                <DropdownItem
                  key={service.serviceTitle}
                  className="focus:ring-black"
                >
                  <a
                    href={`/services/${service.serviceTitle}`}
                    className="flex gap-2 items-center py-1  "
                  >
                    <span className="text-gray-500 font-semibold">
                      {service.serviceTitle}
                    </span>
                  </a>
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </Dropdown>
        <NavbarItem>
          <Link
            color="foreground"
            href="/casestudy"
            className="flex items-center justify-center min-w-20 h-10 text-small rounded-small"
          >
            Case Study{" "}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className="flex items-center justify-center min-w-20 h-10 text-small rounded-small"
          >
            About us{" "}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className="flex items-center justify-center min-w-20 h-10 text-small rounded-small"
          >
            Contact us{" "}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {pathname === "/" ? (
            <Button
              as={Link}
              href=""
              variant="bordered"
              className="text-sitePrimary-700 border border-sitePrimary-700 focus:!ring-0"
            >
              Get Quote
            </Button>
          ) : (
            <Button
              as={Link}
              href="/enquiry"
              variant="bordered"
              className="text-sitePrimary-700 border border-sitePrimary-700 focus:!ring-0"
            >
              Enquiry
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
