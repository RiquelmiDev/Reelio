import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export interface CardFilmProps {
  imageSrc: string;
  title: string;
  filmId: number;
}

const CardFilm = ({ filmId, imageSrc, title }: CardFilmProps) => {
  return (
    <Card className="w-[154px] md:w-[185px] h-full flex-shrink-0 p-0 pb-2 border-0">
      <Link href={`/film/${filmId}`} className="w-full h-full flex flex-col items-center">
        <CardContent className="p-0 flex flex-col gap-2">
          <div className="w-[154px] h-[215px] md:w-[185px] md:h-[270px] relative">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 154px"
              className="rounded-xl object-cover
             transition-transform duration-300 md:hover:scale-105 md:hover:cursor-pointer"
            />
          </div>
          <div className="px-2 w-[154px] md:w-[185px]">
            <p className="text-[10px] md:text-sm truncate overflow-hidden whitespace-nowrap font-semibold">
              {title}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardFilm;
