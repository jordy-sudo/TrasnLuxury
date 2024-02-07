'use client';
import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    path: string;
    title: string;
};

export const NavbarList = ({ path, title }: Props) => {
    const currentPath = usePathname();

    return (
        <NavbarItem isActive={currentPath === path}>
            <Link color="foreground" href={path}  className="transition-all duration-300 hover:bg-[#EF5304] hover:bg-opacity-50 hover:rounded-full p-2">
                {title}
            </Link>
        </NavbarItem>
    )
}
