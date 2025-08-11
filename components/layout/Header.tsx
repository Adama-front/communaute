"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const mainMenuItems = [
    {
      title: "Actualités",
      href: "/actualites",
      subItems: [
        { title: "À la Une", href: "/actualites/une" },
        { title: "Flash Infos", href: "/flash-infos" }
      ]
    },
    {
      title: "Rubriques",
      href: "#",
      subItems: [
        { title: "Économie", href: "/economie" },
        { title: "Société", href: "/societe" },
        { title: "Sport", href: "/sport" },
        { title: "Culture", href: "/culture" }
      ]
    },
    {
      title: "Média",
      href: "#",
      subItems: [
        { title: "Photos", href: "/galerie/photos" },
        { title: "Vidéos", href: "/galerie/videos" }
      ]
    },
    {
      title: "Services",
      href: "#",
      subItems: [
        { title: "Événements", href: "/evenements" },
        { title: "Bibliothèque", href: "/bibliotheque" }
      ]
    }
  ];

  return (
    <>
      <header className="bg-white shadow-md">
        {/* Main Header */}
        <div className="container-custom py-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 fade-in-up">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Panorama TV</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {mainMenuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="text-dark-gray hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex h-full w-full select-none flex-col justify-end group rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md hover:bg-accent transition-colors px-4 py-2"
                              >
                                <div className="text-sm font-medium group-hover:text-primary">
                                  {subItem.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-dark-gray hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/rechercher")}
                  className="w-64 justify-start text-gray-500"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher...
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Menu className="w-4 h-4" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full overflow-y-auto lg:hidden"
                >
                  <div className=" space-y-4">
                    {/* Logo */}
                    <Link
                      href="/"
                      className="flex items-center space-x-3 fade-in-up"
                    >
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">TV</span>
                      </div>
                      <div>
                        <h1 className="text-xl font-bold text-primary">
                          Panorama TV
                        </h1>
                      </div>
                    </Link>
                    {mainMenuItems.map((item) => (
                      <div key={item.title}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-dark-gray hover:text-primary dark:text-gray-300 dark:hover:text-primary block py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                        {item.subItems && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="block md:hidden items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/rechercher")}
              className="w-full justify-start text-gray-500"
            >
              <Search className="w-4 h-4 mr-2" />
              Rechercher...
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
