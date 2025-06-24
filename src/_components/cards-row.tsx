import CardFilm from "./card-film";

export interface CardsRowProps {
  title: string;
  films: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}
export function CardsRow({ title, films }: CardsRowProps) {
  return (
    <>
      <h2 className="mb-3 md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white md:px-32">
        {title}
      </h2>
      <div className="flex md:px-32 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden md:h-[270px] md:p-2">
        {films &&
          films.map((film) => (
            <CardFilm
              key={film.id}
              filmId={film.id}
              imageSrc={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
              title={film.title}
            />
          ))}

        {films.length === 0 && (
          <p className="text-gray-500 text-sm">Nenhum filme encontrado.</p>
        )}
      </div>
    </>
  );
}
