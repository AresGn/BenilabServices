"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heading } from '@chakra-ui/react';

const testimonials = [
  {
    name: "Fatou Ndiaye",
    country: "Sénégal",
    text: "Grâce à Benilab Services, notre présence en ligne a pris une nouvelle dimension. Leur équipe est très professionnelle et à l'écoute.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Jean Kouadio",
    country: "Côte d'Ivoire",
    text: "Leur accompagnement digital a boosté notre activité. Je recommande vivement pour toute entreprise africaine.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Amina Ben Ali",
    country: "Maroc",
    text: "Service rapide, efficace et adapté à nos besoins. Merci à toute l'équipe Benilab pour leur expertise.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40" style={{ background: "#c0d9ea" }}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="xl" textAlign="center" mb={12} color="primary.700">
            Ils nous ont fait confiance
          </Heading>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-white rounded-lg h-full p-6 aspect-video flex justify-between flex-col border border-gray-50 text-gray-800 shadow-md">
                    <User className="w-8 h-8 stroke-1 text-primary-500" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight font-semibold text-primary-500">
                          {testimonial.name} <span className="text-sm text-secondary-500 font-normal">({testimonial.country})</span>
                        </h3>
                        <p className="text-gray-800 max-w-xs text-base">
                          {testimonial.text}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center text-gray-800">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.name}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials }; 