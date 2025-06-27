import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/utility/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  to: string;
  label: string;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border text-foreground py-3 px-6 fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold tracking-widest">Showtime</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4 pl-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "font-medium text-primary" : ""
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-xl font-bold tracking-widest"
                >
                  <h1 className="cursor-pointer">Showtime</h1>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink
                    asChild
                    className="text-lg transition-colors hover:text-primary"
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "font-medium text-primary" : ""
                      }
                    >
                      {item.label}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <h1 className="md:hidden text-xl font-bold tracking-widest absolute left-1/2 -translate-x-1/2">Showtime</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;