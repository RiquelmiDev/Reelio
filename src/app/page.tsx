import { CardsRow } from "@/_components/cards-row";
import CarouselSlide from "@/_components/carousel";
import Header from "@/_components/header";

import {films}  from "@/api/films";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5 md:px-32">
        <h2 className="mb-3  md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white text-center">
          Destaques do Dia
        </h2>

        <CarouselSlide />

        <CardsRow title="Populares" films={films.results}/>
        <CardsRow title="Mais Avaliados" films={films.results}/>

        <CardsRow title="Em Breve" films={films.results}/>
      </div>
    </main>
  );
}
