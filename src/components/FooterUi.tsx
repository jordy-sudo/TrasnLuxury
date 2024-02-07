import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineInfoCircle } from 'react-icons/ai';
import { Divider, Image } from '@nextui-org/react';
import Link from 'next/link';


export const FooterUI = () => {
    return (
        <footer className="bg-gray-950 text-white py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-16">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={64}
                                height={64}
                            />
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#">
                            <FaFacebook className="text-2xl" />
                        </Link>
                        <Link href="#">
                            <FaInstagram className="text-2xl" />
                        </Link>
                        <Link href="#">
                            <FaLinkedin className="text-2xl" />
                        </Link>
                    </div>
                </div>
                <Divider />
                <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        <div className="mb-8 w-full">
                            <h4 className="text-lg font-bold mb-4">CÓMO FUNCIONA</h4>
                            <ul>
                                <li><Link href="/">Cómo Funciona</Link></li>
                                <li><Link href="/">Características</Link></li>
                                <li><Link href="/">Ejemplos</Link></li>
                                <li><Link href="/">Precios y Planes</Link></li>
                            </ul>
                        </div>
                        <div className="mb-8 w-full">
                            <h4 className="text-lg font-bold mb-4">RECURSOS</h4>
                            <ul>
                                <li>Centro de Ayuda</li>
                                <li>Preguntas Frecuentes</li>
                                <li>Tienda Academy</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="mb-8 w-full">
                            <h4 className="text-lg font-bold mb-4">CONTÁCTANOS</h4>
                            <div className="flex items-center">
                                <AiOutlineInfoCircle className="text-2xl" />
                                <p className="ml-2">Contáctanos</p>
                            </div>
                            <div className="flex items-center">
                                <AiOutlinePhone className="text-2xl" />
                                <p className="ml-2">0980-804-963</p>
                            </div>
                            <div className="flex items-center">
                                <AiOutlineMail className="text-2xl" />
                                <p className="ml-2">VENTAS@TIENDABOX.EC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
