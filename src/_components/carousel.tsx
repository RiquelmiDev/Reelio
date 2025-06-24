"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card } from "@/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/_components/ui/carousel";
import { cn } from "@/_lib/utils";
import TopFilmCard from "./top-film-card";

export default function CarouselSlide() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 1000 * 8,
          }),
        ]}
      >
        <CarouselContent className="py-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={cn("pl-0 basis-[50%]", {})}>
              <Card
                className={cn("w-[180px] h-[270px] p-0 rounded-xl border-0 transition-transform duration-500", {
                  "scale-[0.8]": index !== current - 1,
                })}
              >
                <TopFilmCard
                  filmId={1}
                  imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
                  title="Como Treinar Seu Dragão"
                  ranking={2}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
