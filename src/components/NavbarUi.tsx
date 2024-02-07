import React from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavbarList } from './NavbarList';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
    { title: "Sobre Nosotros", path: "/about" },
    { title: "Servicios", path: "/services" },
    { title: "Contactanos", path: "/contact" },
];
export const NavbarUi = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-[#EF5304]",
                ],
            }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link color="foreground" href='/'>
                        <span className="text-gradient text-gradient-1"><strong>Trans</strong></span>
                        <span className="text-gradient text-gradient-2"><strong>Luxury</strong></span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link color="foreground" href='/' className="flex items-center">
                        <Image
                                src="/images/logo.png"  
                                alt="Small Icon"
                                width={44}
                                height={44}
                                className="mr-2" 
                            />
                        <span className="text-gradient text-gradient-1"><strong>Trans</strong></span>
                        <span className="text-gradient text-gradient-2"><strong>Luxury</strong></span>
                    </Link>
                </NavbarBrand>
                {
                    menuItems.map((item, index) => (
                        <NavbarList path={item.path} key={index} title={item.title} />
                    ))
                }
            </NavbarContent>

            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">

                </NavbarItem>
            </NavbarContent> */}

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={item.path}
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
