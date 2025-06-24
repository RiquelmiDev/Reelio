import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";

export default function SecondHeader() {
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="absolute left-4 top-4"
        asChild
      >
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
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
