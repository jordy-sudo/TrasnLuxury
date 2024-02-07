import React from 'react';
import { FaMoneyBillWheat } from 'react-icons/fa6';

export const PaymentSection = () => {
  return (
    <section className="container mx-auto py-16">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Primera columna con icono y texto */}
        <div className="md:w-1/2 flex items-center justify-center">
          <FaMoneyBillWheat className="text-4xl text-[#EF5304]" size={150} />
          <div className="ml-8">Tipos de Pagos</div>
        </div>

        {/* Segunda columna con texto */}
        <div className="md:w-1/2 px-4 text-white">
          <p className="font-bold text-lg md:text-xl text-center md:text-left">
            Permite que tus clientes compren por internet y te paguen en{' '}
            <strong className="text-yellow-500">EFECTIVO</strong> en más de 55 mil puntos de pago a nivel nacional.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};
