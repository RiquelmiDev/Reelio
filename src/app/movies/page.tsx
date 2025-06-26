"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/_components/header";
import Search from "@/_components/search";
import axios from "axios";
import CardMovie from "@/_components/card-movie";

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
}

const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

const Movies = () => {
  // pega os parâmetros de busca da URL
  const searchParams = useSearchParams();

  // pega o valor do parâmetro "title" ou uma string vazia se não existir
  const title = searchParams.get("title") || "";

  // cria um state para armazenar a lista de filmes (ou null se não houver resultados)
  const [movies, setMovies] = useState<Movie[] | null>(null);

  // useEffect executa o código sempre que o valor de "title" mudar
  useEffect(() => {
    // Função assíncrona para buscar filmes na API do TMDB
    const getMovies = async (title: string) => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              language: "pt-BR",
              query: title,
            },
            headers: {
              Authorization: `Bearer ${TMDB_TOKEN}`,
            },
          }
        );
        // Atualiza o estado com a lista de filmes retornada pela API
        setMovies(res.data.results as Movie[]);
      } catch {
        // Em caso de erro, define o estado como null
        setMovies(null);
      }
    };

    // Se houver um título, faz a busca; senão, limpa a lista de filmes
    if (title) {
      getMovies(title);
    } else {
      setMovies(null);
    }
    // O efeito depende do valor de "title"
  }, [title]);

  return (
    <div>
      <Header />
      <div className="my-6 px-5 md:hidden md:px-62 ">
        <Search />
      </div>
      <div className="px-5 mt-6 md:px-32">
        <h2 className="mb-3 md:mb-5 text-xs md:text-base md:text-white font-bold uppercase text-gray-400 w-full truncate">
          Resultados para &quot;{title}&quot;
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies?.map((movie) => (
            <CardMovie
              key={movie.id}
              movieId={movie.id}
              imageSrc={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
