"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/_components/header";
import CarouselSlide from "@/_components/carousel";
import { CardsRow, MoviesProps } from "@/_components/cards-row";

// Interface para o resultado da busca de filmes
interface MoviesResponse {
  results: MoviesProps[];
}
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

export default function Home() {
  const [popular, setPopular] = useState<MoviesProps[]>([]);
  const [topRated, setTopRated] = useState<MoviesProps[]>([]);
  const [upcoming, setUpcoming] = useState<MoviesProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = axios.create({
      baseURL: "https://api.themoviedb.org/3/movie",
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        accept: "application/json",
      },
      params: { language: "pt-BR", page: 1 },
    });

    const fetchData = async () => {
      try {
        const [popRes, topRes, upRes] = await Promise.all([
          client.get<MoviesResponse>("/popular"),
          client.get<MoviesResponse>("/top_rated"),
          client.get<MoviesResponse>("/upcoming"),
        ]);

        setPopular(popRes.data.results);
        setTopRated(topRes.data.results);
        setUpcoming(upRes.data.results);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os filmes.");
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <div className="p-5 md:p-0">
        <CarouselSlide />
        {error && <p className="text-red-500 px-5">{error}</p>}

        <div className="md:px-32 space-y-8">

          <div className="relative w-full mb-6">
            <h2 className="mb-3 md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white">
              Em Alta
            </h2>
            <CardsRow movies={popular} />
          </div>
          <div className="relative w-full mb-6">
            <h2 className="mb-3 md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white">
              Em Breve
            </h2>
            <CardsRow movies={upcoming} />
          </div>
          <div className="relative w-full mb-6">
            <h2 className="mb-3 md:text-base mt-6 text-xs font-bold capitalize text-gray-400 md:text-white">
              Mais Avaliados
            </h2>
            <CardsRow movies={topRated} />
          </div>
        </div>
      </div>
    </main>
  );
}
