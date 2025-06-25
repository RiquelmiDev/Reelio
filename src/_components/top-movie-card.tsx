import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MoviesProps } from "./cards-row";
import RatingStars from "./rating-stars";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";

interface TopMovieCardProps {
  movie: MoviesProps;
  ranking: number;
}

const getRatingValue = (vote_average: number) => {
  // Converte de 0-10 para 1-5, sempre arredondando para cima e garantindo mínimo 1
  return Math.max(1, Math.round(vote_average / 2));
};

const TopMovieCard = ({ movie, ranking }: TopMovieCardProps) => {
  
  return (
    <div>
      <CardContent className="p-0 flex flex-col items-start justify-center gap-2 relative select-none md:w-[250px] md:h-[380px]">
        {/* Badge de ranking */}
        {ranking === 1 && (
          <Badge
            className="absolute top-2 right-2 h-[16px] p-3 text-sm"
            variant="secondary"
          >
            <Image
              src="/icons/top1.svg"
              alt="Icone de medalha primeiro lugar"
              width={14}
              height={14}
              style={{ height: "auto", width: "auto" }}
            />{" "}
            Top 1
          </Badge>
        )}
        {ranking === 2 && (
          <Badge
            className="absolute top-2 right-2 h-[16px] p-3 text-sm text-white"
            variant="default"
          >
            <Image
              src="/icons/top2.svg"
              alt="Icone de medalha segundo lugar"
              width={14}
              height={14}
              style={{ height: "auto", width: "auto" }}
            />{" "}
            Top 2
          </Badge>
        )}
        {ranking === 3 && (
          <Badge
            className="absolute top-2 right-2 h-[16px] p-3 text-sm"
            variant="destructive"
          >
            <Image
              src="/icons/top3.svg"
              alt="Icone de medalha terceiro lugar"
              width={14}
              height={14}
              style={{ height: "auto", width: "auto" }}
            />{" "}
            Top 3
          </Badge>
        )}

        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={370}
          className="rounded-xl w-auto h-auto"
        />
        {/* <Image
          src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
          alt={film.title}
          width={180}
          height={270}
          className="rounded-xl"
        /> */}

        <div
          className="absolute bottom-0 left-0 right-0 min-h-[40%] bg-opacity-20 flex flex-col items-start justify-between gap-1 p-2 rounded-b-xl"
          style={{ backgroundColor: "rgba(51, 51, 51, 0.7)" }}
        >
          <h2 className="text-sm md:text-lg w-full max-h-[40px] truncate">
            {movie.title}
          </h2>
          <div className="flex items-center justify-between w-full">
            {/* badges de categoria */}
            <div className="flex gap-1">
              <Badge
                className="text-[8px] md:text-[12px] h-[14px] md:h-[18px] md:px-2 px-1"
                variant="secondary"
              >
                Aventura
              </Badge>
              <Badge
                className="text-[8px] md:text-[12px] h-[14px] md:h-[18px] md:px-2 px-1"
                variant="secondary"
              >
                Ação
              </Badge>
              <Badge
                className="text-[8px] md:text-[12px] h-[14px] md:h-[18px] md:px-2 px-1"
                variant="secondary"
              >
                Drama
              </Badge>
            </div>
            {/* separador */}
            <div className="h-[100%] w-[2px] bg-gray-500"></div>
            {/* Ano do filme */}
            <p className="text-[10px] md:text-[14px]">
              {movie.release_date ? movie.release_date.substring(0, 4) : "—"}
            </p>
          </div>
          {/* stars */}
          <RatingStars ratingValue={getRatingValue(movie.vote_average)} />
          {/* Btn Saiba mais */}
          <Button asChild variant="default" className="w-full text-white">
            <Link href={`/movies/${movie.id}`}>
              Saiba Mais <ChevronRight />
            </Link>
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default TopMovieCard;
