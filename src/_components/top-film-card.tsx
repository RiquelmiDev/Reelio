import Image from "next/image";
import Link from "next/link";
import { CardFilmProps } from "./card-film";
import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import RatingStars from "./rating-stars";

interface TopFilmCardProps extends CardFilmProps {
  ranking: number;
}

const TopFilmCard = ({
  filmId,
  imageSrc,
  title,
  ranking,
}: TopFilmCardProps) => {
  return (
    <div>
      <CardContent className="p-0 flex flex-col items-start justify-center gap-2 relative select-none">
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
            />{" "}
            Top 3
          </Badge>
        )}

        <Image
          src={imageSrc}
          alt={title}
          width={180}
          height={270}
          className="rounded-xl"
        />

        <div
          className="h-[50%] bg-opacity-20 absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-1 p-2 rounded-xl "
          style={{ backgroundColor: "rgba(51, 51, 51, 0.7)" }}
        >
          <h2 className="text-sm w-full max-h-[40px] truncate">{title}</h2>
          <div className="flex items-center justify-between w-full">
            {/* badges de categoria */}
            <div className="flex gap-1">
              <Badge className="text-[8px] h-[14px] px-1" variant="secondary">
                Aventura
              </Badge>
              <Badge className="text-[8px] h-[14px] px-1" variant="secondary">
                Ação
              </Badge>
              <Badge className="text-[8px] h-[14px] px-1" variant="secondary">
                Drama
              </Badge>
            </div>
            {/* separador */}
            <div className="h-[100%] w-[2px] bg-gray-500"></div>
            {/* Ano do filme */}
            <p className="text-[10px]">2025</p>
          </div>
          {/* stars */}
          <RatingStars ratingValue={5} />
          {/* Btn Saiba mais */}
          <Button asChild variant="default" className="w-full text-white">
            <Link href={`/film/${filmId}`}>
              Saiba Mais <ChevronRight />
            </Link>
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default TopFilmCard;
