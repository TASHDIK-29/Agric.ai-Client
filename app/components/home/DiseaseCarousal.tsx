'use client'

import Image from 'next/image';
import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "/disease-1.jpg",
  "/disease-2.jpg",
  "/disease-3.jpg",
  "/disease-4.jpg",
  "/disease-1.jpg",
  "/disease-2.jpg",
  "/disease-3.jpg",
  "/disease-4.jpg",
];

const DiseaseCarousal = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 1500,
                }),
            ]}
            className="max-w-7xl mx-auto w-full pt-12 md:pt-20"
        >
            <CarouselContent className="md:space-x-4">
                {images.map((img, index) => (
                    <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                        <Image
                            src={img}
                            alt={`disease-${index}`}
                            width={400}
                            height={500}
                            className="w-full h-60 md:h-80 object-cover rounded-xl"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default DiseaseCarousal;