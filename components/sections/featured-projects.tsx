"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A fully functional e-commerce platform with product management, cart, and checkout features.",
      image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "/projects/e-commerce-platform"
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "/projects/task-management"
    },
    {
      id: "project-3",
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode support and smooth animations.",
      image: "https://images.pexels.com/photos/5926400/pexels-photo-5926400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "/projects/portfolio-website"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t.projects.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/projects">
              {t.projects.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link}>
                    {t.projects.viewDetails} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}