"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsList from "@/components/projects-list";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/" className="inline-flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t.nav.home}
        </Link>
      </Button>
      
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t.projects.title}</h1>
        <p className="text-xl text-muted-foreground">
          {t.projects.subtitle}
        </p>
      </div>
      
      <ProjectsList />
    </div>
  );
}