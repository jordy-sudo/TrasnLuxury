import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative">
      {/* Full-width image */}
      <div className="relative overflow-hidden">
        <Image
          isZoomed
          src="/home.png"
          alt="Badge"
          width={1500}
        />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white z-10 px-4 sm:px-8">
        <div className="mb-8">
          {/* Espacio entre la imagen y el botón */}
        </div>
        <div className="max-w-xs mx-auto">
          <Button className='text-white hover:bg-[#EF5304]' variant="bordered" size="lg">
            <Link href="/services">
              Explora nuestros servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
