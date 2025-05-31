import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Project data structure
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  tags: string[];
  category: string;
  demoLink?: string;
  githubLink?: string;
  detailLink: string;
};

const projects: Project[] = [
  // Web Applications
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with product management, cart, and checkout features.",
    longDescription: "Built with Next.js, TypeScript, and Stripe integration for payments. Features include product search, filtering, user authentication, order history, and admin dashboard for product management.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "web",
    demoLink: "https://demo.example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce",
    detailLink: "/projects/ecommerce-platform"
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "Built with React, Node.js, and Socket.io for real-time collaboration. Features include task assignments, deadlines, commenting system, file attachments, and team workspaces.",
    image: "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "web",
    demoLink: "https://demo.example.com/taskapp",
    githubLink: "https://github.com/yourusername/taskapp",
    detailLink: "/projects/task-management"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode support and smooth animations.",
    longDescription: "Built with Next.js and Tailwind CSS. Features include responsive design, dark/light theme toggle, smooth page transitions, and optimized performance.",
    image: "https://images.pexels.com/photos/5926400/pexels-photo-5926400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
    githubLink: "https://github.com/yourusername/portfolio",
    detailLink: "/projects/portfolio-website"
  },
  
  // Mobile Applications
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    longDescription: "Built with React Native and Firebase. Features include workout tracking, meal planning, progress charts, and health metrics visualization.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    category: "mobile",
    demoLink: "https://demo.example.com/fitnessapp",
    githubLink: "https://github.com/yourusername/fitness-tracker",
    detailLink: "/projects/fitness-tracker"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A beautiful weather application with 7-day forecast and location-based updates.",
    longDescription: "Built with React Native and OpenWeatherMap API. Features include current weather, 7-day forecast, location detection, and custom animations for different weather conditions.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Redux", "OpenWeatherMap API"],
    category: "mobile",
    githubLink: "https://github.com/yourusername/weather-app",
    detailLink: "/projects/weather-app"
  },
  
  // Other Projects
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts.",
    longDescription: "Built with React, D3.js, and Recharts. Features include interactive charts, data filtering, CSV/JSON import, and responsive design for various screen sizes.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "Recharts", "TypeScript"],
    category: "other",
    demoLink: "https://demo.example.com/dashboard",
    githubLink: "https://github.com/yourusername/data-dashboard",
    detailLink: "/projects/data-visualization"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "A conversational chatbot with natural language processing capabilities.",
    longDescription: "Built with Next.js, OpenAI API, and WebSockets. Features include natural language understanding, context awareness, and customizable responses based on training data.",
    image: "https://images.pexels.com/photos/7516362/pexels-photo-7516362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "OpenAI API", "WebSockets", "Natural Language Processing"],
    category: "other",
    demoLink: "https://demo.example.com/chatbot",
    githubLink: "https://github.com/yourusername/ai-chatbot",
    detailLink: "/projects/ai-chatbot"
  }
];

export default function ProjectsList() {
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "other", label: "Other Projects" }
  ];

  return (
    <div>
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mx-auto flex justify-center">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => category.value === "all" || project.category === category.value)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg flex flex-col h-full">
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
                    <CardContent className="p-6 flex-grow">
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
                    <CardFooter className="px-6 pb-6 pt-0 flex flex-col sm:flex-row gap-3 mt-auto">
                      <Button asChild variant="outline" className="w-full sm:w-auto">
                        <Link href={project.detailLink}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="flex gap-2 w-full sm:w-auto">
                        {project.githubLink && (
                          <Button asChild size="icon\" variant="ghost\" className="flex-1 sm:flex-none">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                        {project.demoLink && (
                          <Button asChild size="icon" variant="ghost" className="flex-1 sm:flex-none">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}