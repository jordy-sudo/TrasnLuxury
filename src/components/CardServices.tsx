import React from 'react'
import { Card, CardBody, CardHeader, Divider, } from "@nextui-org/react";

interface Props {
    icon: React.ReactNode;
    title: string;
    content: string;
};

export const CardServices = ({ icon, title, content }: Props) => {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-2">
                    {icon}
                </div>
                <p className="text-small text-default-500">{title}</p>
            </CardHeader>
            <Divider />
            <CardBody>
                {/* <h3 className="text-lg font-semibold mb-2">{}</h3> */}
                <p>{content}</p>
            </CardBody>
        </Card>

    )
}
