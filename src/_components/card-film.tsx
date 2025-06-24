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
    <Card className="w-[154px] h-full flex-shrink-0 p-0 rounded-xl border-0">
      <Link href={`/film/${filmId}`} className="w-full h-full ">
        <CardContent className=" p-0 flex flex-col gap-2">
          <div className="w-[154px] h-[215px] relative">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 154px"
              className="rounded-xl object-cover
             transition-transform duration-300 md:hover:scale-105 md:hover:cursor-pointer"
            />
          </div>
          <p className="text-[10px] px-2 w-full truncate font-semibold">
            {title}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardFilm;
