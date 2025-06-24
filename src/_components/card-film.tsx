import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

interface CardFilmProps {
  imageSrc: string;
  title: string;
  filmId: number;
}

const CardFilm = ({filmId, imageSrc, title }: CardFilmProps) => {
  return (
    <Card className="w-[154px] h-[215px] p-0 rounded-xl border-0">
      <Link href={`/film/${filmId}`}>
        <CardContent className="p-0 flex flex-col items-start justify-center gap-2">
          <Image
            src={imageSrc}
            alt={title}
            width={154}
            height={231}
            className="rounded-xl"
          />
          <p className="text-[10px] px-1 w-full truncate font-semibold">
            {title}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardFilm;
