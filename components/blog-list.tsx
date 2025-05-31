"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarIcon, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  link: string;
};

const posts: BlogPost[] = [
  // Frontend Development
  {
    id: "post-1",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "Learn how to set up a modern web application using Next.js and TypeScript, with best practices for project structure and configuration.",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "frontend",
    tags: ["Next.js", "TypeScript", "React", "Web Development", "JavaScript", "Frontend"],
    link: "/blog/getting-started-nextjs-typescript"
  },
  {
    id: "post-2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes and component patterns.",
    date: "May 22, 2023",
    readTime: "8 min read",
    category: "frontend",
    tags: ["CSS", "Tailwind CSS", "Responsive Design", "UI Development", "Frontend", "HTML"],
    link: "/blog/responsive-uis-tailwind"
  },
  {
    id: "post-3",
    title: "Advanced React Patterns",
    excerpt: "Explore advanced React patterns including compound components, render props, and custom hooks for building reusable component systems.",
    date: "April 8, 2023",
    readTime: "12 min read",
    category: "frontend",
    tags: ["React", "JavaScript", "TypeScript", "Component Design", "Patterns", "Frontend"],
    link: "/blog/advanced-react-patterns"
  },
  {
    id: "post-4",
    title: "Vue.js 3 Composition API Deep Dive",
    excerpt: "Master Vue.js 3's Composition API and learn how to build more maintainable and reusable components.",
    date: "March 25, 2023",
    readTime: "15 min read",
    category: "frontend",
    tags: ["Vue.js", "JavaScript", "Frontend", "Composition API", "Web Development"],
    link: "/blog/vuejs-composition-api"
  },
  
  // Backend Development
  {
    id: "post-5",
    title: "RESTful API Design Principles",
    excerpt: "Learn the fundamental principles of designing clean, maintainable, and scalable RESTful APIs for your applications.",
    date: "March 17, 2023",
    readTime: "7 min read",
    category: "backend",
    tags: ["API Design", "REST", "Backend", "Web Services", "Node.js", "Express"],
    link: "/blog/restful-api-design"
  },
  {
    id: "post-6",
    title: "Building Microservices with Node.js",
    excerpt: "A comprehensive guide to building and deploying microservices architecture using Node.js and Docker.",
    date: "March 1, 2023",
    readTime: "20 min read",
    category: "backend",
    tags: ["Node.js", "Microservices", "Docker", "Backend", "JavaScript", "Architecture"],
    link: "/blog/nodejs-microservices"
  },
  {
    id: "post-7",
    title: "GraphQL API Development with Apollo Server",
    excerpt: "Learn how to build efficient and flexible GraphQL APIs using Apollo Server and Node.js.",
    date: "February 15, 2023",
    readTime: "18 min read",
    category: "backend",
    tags: ["GraphQL", "Apollo", "Node.js", "API", "Backend", "JavaScript"],
    link: "/blog/graphql-apollo-server"
  },
  {
    id: "post-8",
    title: "Django REST Framework Best Practices",
    excerpt: "Master Django REST Framework with best practices for building robust and scalable APIs.",
    date: "February 1, 2023",
    readTime: "15 min read",
    category: "backend",
    tags: ["Python", "Django", "REST", "API", "Backend", "Web Development"],
    link: "/blog/django-rest-framework"
  },
  
  // DevOps & Cloud
  {
    id: "post-9",
    title: "AWS Lambda and Serverless Architecture",
    excerpt: "Dive into serverless computing with AWS Lambda and learn how to build scalable serverless applications.",
    date: "January 20, 2023",
    readTime: "16 min read",
    category: "devops",
    tags: ["AWS", "Lambda", "Serverless", "Cloud", "DevOps", "Architecture"],
    link: "/blog/aws-lambda-serverless"
  },
  {
    id: "post-10",
    title: "Kubernetes for Application Deployment",
    excerpt: "Learn how to orchestrate containerized applications using Kubernetes in production environments.",
    date: "January 5, 2023",
    readTime: "25 min read",
    category: "devops",
    tags: ["Kubernetes", "Docker", "DevOps", "Container", "Orchestration", "Cloud"],
    link: "/blog/kubernetes-deployment"
  },
  {
    id: "post-11",
    title: "CI/CD Pipeline with GitHub Actions",
    excerpt: "Set up a robust continuous integration and deployment pipeline using GitHub Actions for your web applications.",
    date: "December 20, 2022",
    readTime: "12 min read",
    category: "devops",
    tags: ["CI/CD", "GitHub Actions", "DevOps", "Automation", "Git", "Deployment"],
    link: "/blog/github-actions-cicd"
  },
  
  // Database & Performance
  {
    id: "post-12",
    title: "MongoDB Performance Optimization",
    excerpt: "Learn techniques for optimizing MongoDB performance and implementing efficient database design.",
    date: "December 5, 2022",
    readTime: "14 min read",
    category: "backend",
    tags: ["MongoDB", "Database", "Performance", "NoSQL", "Backend", "Optimization"],
    link: "/blog/mongodb-optimization"
  },
  {
    id: "post-13",
    title: "PostgreSQL Advanced Features",
    excerpt: "Explore advanced PostgreSQL features for building high-performance applications.",
    date: "November 20, 2022",
    readTime: "18 min read",
    category: "backend",
    tags: ["PostgreSQL", "SQL", "Database", "Backend", "Performance"],
    link: "/blog/postgresql-advanced"
  }
];

export default function BlogList() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);

  const categories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "devops", label: "DevOps" },
    { value: "other", label: "Other" }
  ];

  // Get unique tags from posts filtered by selected categories
  const getFilteredTags = () => {
    const relevantPosts = selectedCategories.length === 0 
      ? posts 
      : posts.filter(post => selectedCategories.includes(post.category));
    
    return Array.from(new Set(relevantPosts.flatMap(post => post.tags))).sort();
  };

  const filteredTags = getFilteredTags();
  const visibleTags = showAllTags ? filteredTags : filteredTags.slice(0, 10);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      // Reset selected tags if they're no longer available in the filtered posts
      const newFilteredTags = Array.from(new Set(
        posts
          .filter(post => newCategories.length === 0 || newCategories.includes(post.category))
          .flatMap(post => post.tags)
      ));
      
      setSelectedTags(prev => prev.filter(tag => newFilteredTags.includes(tag)));
      return newCategories;
    });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(post.category);
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategories && matchesTags;
  });

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10 max-w-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.value}
                  variant={selectedCategories.includes(category.value) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/90"
                  onClick={() => toggleCategory(category.value)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Technologies</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/90"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              {filteredTags.length > 10 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {showAllTags ? "Show Less" : `Show ${filteredTags.length - 10} More...`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="font-normal">
                  {categories.find(c => c.value === post.category)?.label}
                </Badge>
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
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
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}