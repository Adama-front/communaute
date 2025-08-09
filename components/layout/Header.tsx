"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NotificationBell } from "@/components/ui/notification-bell";
import { SearchModal } from "@/components/ui/search-modal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    );
  }, []);

  const mainMenuItems = [
    {
      title: "Actualités",
      href: "/actualites",
      subItems: [
        { title: "À la Une", href: "/actualites/une" },
        { title: "Flash Infos", href: "/flash-infos" },
        { title: "Dépêches", href: "/depeches" }
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
        { title: "Vidéos", href: "/galerie/videos" },
        { title: "Podcasts", href: "/podcasts" }
      ]
    },
    {
      title: "Services",
      href: "#",
      subItems: [
        { title: "Événements", href: "/evenements" },
        { title: "Bibliothèque", href: "/bibliotheque" },
        { title: "Dossiers", href: "/dossiers" }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/rechercher?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  // Raccourci clavier pour la recherche
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearchModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-200">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2">
          <div className="container-custom flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📅 {currentDate || ""}</span>
              <span>🌡️ 22°C</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#newsletter"
                className="hover:text-secondary transition-colors"
              >
                Newsletter
              </Link>
              <NotificationBell />
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 fade-in-up">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary gradient-text">
                  Voix de la Communauté
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Actualités Locales
                </p>
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
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent transition-colors"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
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
                  onClick={openSearchModal}
                  className="w-64 justify-start text-gray-500"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher... <kbd className="ml-auto text-xs">⌘K</kbd>
                </Button>
              </div>

              <ThemeToggle />

              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex"
                asChild
              >
                <Link href="/auth/connexion">
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </Link>
              </Button>

              {/* Mobile Menu Button */}
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
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t slide-in-right">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                <Button
                  variant="outline"
                  onClick={openSearchModal}
                  className="justify-start mb-4"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher...
                </Button>

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
                <Button className="mt-4" asChild>
                  <Link href="/auth/connexion">
                    <User className="w-4 h-4 mr-2" />
                    Connexion
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
};

export default Header;
