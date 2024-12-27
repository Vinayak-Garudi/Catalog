"use client";
import React from "react";
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
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { handleLogOut } from "@/utils/auth";

interface menuProps {
  key: string;
  href?: string;
}

export default function NavbarComponent() {
  const pathName = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mobileMenuItems, setMobileMenuItems] = React.useState<menuProps[]>([
    {
      key: "Dashboard",
      href: "/",
    },
    {
      key: "Products",
      href: "/products",
    },
    {
      key: "Purchase Requests",
      href: "/purchaseRequests",
    },
    {
      key: "Sales",
      href: "/sales",
    },
  ]);
  const [desktopMenuItems, setDesktopMenuItems] = React.useState<menuProps[]>([
    {
      key: "Dashboard",
      href: "/",
    },
    {
      key: "Products",
      href: "/products",
    },
    {
      key: "Purchase Requests",
      href: "/purchaseRequests",
    },
    {
      key: "Sales",
      href: "/sales",
    },
  ]);

  function getCurrentRoute(route: menuProps): boolean {
    return pathName === route.href;
  }

  return (
    <Navbar isBlurred={true} isBordered={true} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`sm:hidden ${pathName === "/SignUp" ? "invisible" : ""}`}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Catalog</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {desktopMenuItems.map((item: menuProps, i: number) => {
          return (
            <NavbarItem
              className={`${pathName === "/SignUp" ? "invisible" : ""}`}
              key={i}
              isActive={getCurrentRoute(item)}
            >
              <Link
                color={!getCurrentRoute(item) ? "foreground" : "primary"}
                href={item.href}
              >
                {item.key}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="danger"
            onClick={() => {
              handleLogOut();
              router.push("/SignUp");
            }}
            variant="light"
            className={`${pathName === "/SignUp" ? "invisible" : ""}`}
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {mobileMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={getCurrentRoute(item) ? "primary" : "foreground"}
              className="w-full"
              href={item.href ?? "#"}
              size="lg"
            >
              {item.key}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
