import { CardsRow } from "@/_components/cards-row";
import CarouselSlide from "@/_components/carousel";
import Header from "@/_components/header";

import { films } from "@/api/films";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5 md:p-0">
        <CarouselSlide />
        <div className="md:px-32">
          <CardsRow title="Populares" films={films.results} />
          <CardsRow title="Mais Avaliados" films={films.results} />

          <CardsRow title="Em Breve" films={films.results} />
        </div>
      </div>
    </main>
  );
}
