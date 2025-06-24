import CardFilm from "@/_components/card-film";
import SlideScale from "@/_components/carousel";
import Header from "@/_components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 text-center">
          Recomendados
        </h2>

        <SlideScale />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Mais Avaliados
        </h2>

        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Em Breve
        </h2>

        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
