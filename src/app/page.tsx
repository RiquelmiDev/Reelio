import { CardsRow } from "@/_components/cards-row";
import CarouselSlide from "@/_components/carousel";
import Header from "@/_components/header";

import { movies } from "@/api/movies";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5 md:p-0">
        <CarouselSlide />
        <div className="md:px-32">
          <CardsRow title="Populares" movies={movies.results} />
          <CardsRow title="Mais Avaliados" movies={movies.results} />

          <CardsRow title="Em Breve" movies={movies.results} />
        </div>
      </div>
    </main>
  );
}
