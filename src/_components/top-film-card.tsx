import Image from "next/image";
import Link from "next/link";
import { CardFilmProps } from "./card-film";
import { CardContent } from "./ui/card";

interface TopFilmCardProps extends CardFilmProps {
  ranking: number;
}

const TopFilmCard = ({ filmId, imageSrc, title }: TopFilmCardProps) => {
  return (
    <Link href={`/film/${filmId}`}>
      <CardContent className="p-0 flex flex-col items-start justify-center gap-2">
        <Image
          src={imageSrc}
          alt={title}
          width={180}
          height={270}
          className="rounded-xl"
        />
      </CardContent>
    </Link>
  );
};

export default TopFilmCard;
