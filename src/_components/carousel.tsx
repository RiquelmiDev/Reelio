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

import { movies } from "@/api/movies";
import { Trophy } from "lucide-react";
import TopMovieCard from "./top-movie-card";

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

  // Pega o filme atual
  const currentMovie =
    movies.results[(current - 1 + movies.results.length) % movies.results.length];
  const backdropUrl = currentMovie
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : "";

  return (
    <div className="relative md:w-full md:h-[490px]">
      {/* Background só no desktop */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: backdropUrl ? `url(${backdropUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s",
        }}
      />
      {/* Overlay para escurecer a imagem de fundo */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-10 backdrop-blur-[1px] bg-black/40" />
      
      <div className="relative z-20 md:h-[400px] w-full md:p-2">
      {/* Título do filme atual */}
      <div className="w-full flex items-center justify-center z-20 py-4 gap-1">
        <Trophy size={14}  />
        <h2 className=" md:text-base text-xs font-bold capitalize text-gray-400 md:text-white text-center">
          Destaques do Dia
        </h2>
        <Trophy size={14} />
      </div>
        <div className="mx-auto max-w-xs md:max-w-[800px] md:h-[100%] md:flex md:items-center md:p-3">
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
                <CarouselItem
                  key={index}
                  className={cn("pl-0 basis-[50%] md:basis-[32%]", {})}
                >
                  <Card
                    className={cn(
                      "w-[180px] h-[270px] md:h-[100%] p-0 rounded-xl border-0 transition-transform duration-500",
                      {
                        "scale-[0.8]": index !== current - 1,
                      }
                    )}
                  >
                    <TopMovieCard
                      movie={movies.results[index % movies.results.length]}
                      ranking={index + 1}
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
