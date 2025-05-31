'use client';

import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="text-primary">{t.hero.productName}</span>{t.hero.greeting}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">{t.hero.contact}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/projects">{t.hero.viewProjects}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
            <ArrowDownIcon className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}