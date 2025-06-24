import CardFilm from "@/_components/card-film";
import { CardsRow } from "@/_components/cards-row";
import CarouselSlide from "@/_components/carousel";
import Header from "@/_components/header";

import {films}  from "@/api/films";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="mb-3  md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white text-center">
          Destaques do Dia
        </h2>

        <CarouselSlide />

        <CardsRow title="Populares" films={films.results}/>

        <h2 className="mb-3 md:text-base md:px-32 mt-6 text-xs font-bold capitalize text-gray-400 md:text-white">
          Mais Avaliados
        </h2>

        <div className="flex md:px-32 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
        </div>
        <h2 className="mb-3 md:text-base md:px-32 mt-6 text-xs font-bold capitalize text-gray-400 md:text-white">
          Em Breve
        </h2>

        <div className="flex md:px-32 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
          <CardFilm
            filmId={1}
            imageSrc="https://image.tmdb.org/t/p/w780/vdvEClt3J8sFWxyMo0Jm7JpouEo.jpg"
            title="Como Treinar Seu Dragão"
          />
        </div>
      </div>
    </main>
  );
}
