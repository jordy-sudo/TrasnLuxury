import React from 'react'
import { CardServices } from './CardServices';
import { FaHandPointer, FaPercent, FaRegHandshake } from 'react-icons/fa';

const cardData = [
    {
        id: 1,
        title: 'Accesible',
        description: 'Accesible desde $ 144 al año o pagos mensuales. Eso es menos de $ 0.40 al día. Por un único pago anual, podrás hacer comercio electrónico desde el primer día.',
        icon: <FaRegHandshake  size={30}/>,
    },
    {
        id: 2,
        title: 'De comisiones',
        description: 'En TransLuxury no cobramos comisiones por ventas menores a $2000 al mes. Consulta nuestra tarifas y las tarifas de las pasarelas',
        icon: <FaPercent  size={30}/>,
    },
    {
        id: 3,
        title: 'Sencilla',
        description: 'No necesitas saber de diseño o programación. En tu propio idioma y en pocos minutos, ingresas la información de tus productos, subes unas fotos, pones el precio y listo, ya tienes una tienda virtual.',
        icon: <FaHandPointer size={30}/>,
    },
];

export const ServiceSection = () => {

    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">
                ¿Por qué elegir 
                -
                <span className="text-gradient text-gradient-1">Trans</span>
                <span className="text-gradient text-gradient-2">Luxury</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cardData.map((card) => (
                    <CardServices key={card.id} title={card.title} content={card.description} icon={card.icon} />
                ))}
            </div>
        </section>
    )
}
