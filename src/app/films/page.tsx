"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CardFilm from "@/_components/card-film";
import Header from "@/_components/header";
import Search from "@/_components/search";
import axios from "axios";

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  // add other fields as needed
}

const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

const Films = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const getMovies = async (title: string) => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            language: "pt-BR",
            query: title,
          },
          headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        });
        setMovies(res.data.results as Movie[]);
      } catch {
        setMovies(null);
      }
    };

    if (title) {
      getMovies(title);
    } else {
      setMovies(null);
    }
  }, [title]);

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{title}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {movies?.map((movie) => (
            <CardFilm
              key={movie.id}
              filmId={movie.id}
              imageSrc={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Films;
