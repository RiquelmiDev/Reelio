"use client"
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import SidebarSheet from "./sidebar-sheet";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";

export default function SecondHeader() {
  const router = useRouter();
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="absolute left-4 top-4"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="absolute right-4 top-4"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SidebarSheet />
      </Sheet>
    </>
  );
}
