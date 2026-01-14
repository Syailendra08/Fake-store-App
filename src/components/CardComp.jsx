import { Card } from "flowbite-react";

export default function CardComp() {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://images.asos-media.com/products/jordan-jumpman-two-trey-trainers-in-white-and-blue/204072155-1-whiteblue?$n_640w$&wid=513&fit=constrain"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy 
            </h5>
           
        </Card>
    )
}