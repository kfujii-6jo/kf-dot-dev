"use client";

import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

export default function RecentPosts() {
  const { language } = useLanguage();
  const t = translations[language];

  const posts = [
    {
      id: "post-1",
      title: "Getting Started with Next.js and TypeScript",
      excerpt: "Learn how to set up a modern web application using Next.js and TypeScript.",
      date: "June 15, 2023",
      readTime: "5 min read",
      link: "/blog/getting-started-nextjs-typescript"
    },
    {
      id: "post-2",
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
      date: "May 22, 2023",
      readTime: "8 min read",
      link: "/blog/responsive-uis-tailwind"
    },
    {
      id: "post-3",
      title: "State Management in React Applications",
      excerpt: "Explore different state management approaches in modern React applications.",
      date: "April 10, 2023",
      readTime: "10 min read",
      link: "/blog/state-management-react"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t.blog.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.blog.subtitle}
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/blog">
              {t.blog.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  <Link href={post.link} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="ghost" className="w-full">
                  <Link href={post.link}>
                    {t.blog.readArticle} <ArrowRight className="ml-2 h-4 w-4" />
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