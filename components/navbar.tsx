"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

const navItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.projects", href: "/projects" },
  { name: "nav.blog", href: "/blog" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icon.svg"
                alt="kfujii.dev logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-xl font-bold">kfujii.dev</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  (pathname === item.href || (item.href === "/projects" && pathname.startsWith("/projects/")))
                    ? "bg-primary text-primary-foreground border border-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t.nav[item.name.split('.')[1] as keyof typeof t.nav]}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground border border-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.nav[item.name.split('.')[1] as keyof typeof t.nav]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}