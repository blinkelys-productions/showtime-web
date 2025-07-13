import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
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
  isDropdown?: boolean;
  parent?: string;
};

const navItems: NavItem[] = [
  { to: "/organizations/:orgId", label: "Home" },
  { to: "/organizations/:orgId/events", label: "My Events" },
  { to: "/organizations/:orgId/calendar", label: "Calendar" },
  { to: "/organizations/:orgId/messages", label: "Messages" },
  // Dropdown items below
  { to: "/organizations/:orgId/disk", label: "Disk", isDropdown: true, parent: "More" },
  { to: "/organizations/:orgId/todo", label: "Todo", isDropdown: true, parent: "More" },
  { to: "/organizations/:orgId/profile", label: "Profile", isDropdown: true, parent: "More" },
  { to: "/organizations/:orgId/settings", label: "Settings", isDropdown: true, parent: "More" },
  { to: "/", label: "Back to showtime", isDropdown: true, parent: "More" },
  { to: "/organizations/:orgId/logout", label: "Logout", isDropdown: true, parent: "More" },
];

function OrganizationNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownGroups = navItems
    .filter((item) => item.isDropdown)
    .reduce((acc: Record<string, NavItem[]>, item) => {
      const group = item.parent || "More";
      acc[group] = acc[group] || [];
      acc[group].push(item);
      return acc;
    }, {});

  const normalItems = navItems.filter((item) => !item.isDropdown);

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
                {normalItems.map((item) => (
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
                {Object.entries(dropdownGroups).map(([parent, items]) => (
                  <div key={parent} className="space-y-2">
                    <div className="text-muted-foreground uppercase text-xs font-bold">{parent}</div>
                    {items.map((item) => (
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

              {normalItems.map((item) => (
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

              {/* Dropdown Menu */}
              {Object.entries(dropdownGroups).map(([parent, items]) => (
                <NavigationMenuItem key={parent}>
                  <NavigationMenuTrigger className="text-lg font-normal">
                    {parent}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="flex flex-col gap-2 min-w-[200px]">
                      {items.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `block px-2 py-1 rounded transition-colors ${
                                isActive ? "text-primary font-medium" : "hover:text-primary"
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <h1 className="md:hidden text-xl font-bold tracking-widest absolute left-1/2 -translate-x-1/2">
          Showtime
        </h1>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default OrganizationNavbar;
