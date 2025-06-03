"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heading } from '@chakra-ui/react';
import { testimonials } from '@/data/testimonials';

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
    <div className="w-full py-20 lg:py-40" style={{ background: "#e6f0f7" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          <Heading as="h2" size="xl" textAlign="center" mb={8} color="primary.700">
            Ils nous ont fait confiance
          </Heading>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="gap-6 md:gap-8 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3" key={testimonial.id}>
                  <div className="bg-white rounded-lg h-full p-6 md:p-8 lg:p-10 min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex justify-between flex-col border border-gray-50 text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <User className="w-8 h-8 stroke-1 text-primary-500" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 flex-grow">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl tracking-tight font-semibold text-primary-500 leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm md:text-base text-secondary-500 font-medium">
                          {testimonial.role} - {testimonial.company}
                        </p>
                        {testimonial.project && (
                          <p className="text-xs md:text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-md inline-block w-fit">
                            Projet: {testimonial.project}
                          </p>
                        )}
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed flex-grow">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex flex-row gap-3 text-sm md:text-base items-center text-gray-800 mt-auto pt-4 border-t border-gray-100">
                        <Avatar className="h-8 w-8 md:h-10 md:w-10">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{testimonial.name}</span>
                      </div>
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