import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
  const projects = [
    "ecommerce-platform",
    "task-management",
    "portfolio-website",
    "fitness-tracker",
    "weather-app",
    "data-visualization",
    "ai-chatbot"
  ];
  
  return projects.map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const title = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  return {
    title: `${title} | Projects | My Portfolio`,
    description: `Detailed information about the ${title} project`,
  };
}

// Sample project details for demonstration
// In a real application, this would come from a CMS or database
const projectDetails = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with product management, cart, and checkout features.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoLink: "https://demo.example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce",
    overview: "This e-commerce platform provides a complete online shopping experience with user authentication, product browsing, cart management, and secure checkout through Stripe integration.",
    features: [
      "User authentication and account management",
      "Product catalog with categories and search functionality",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product management"
    ],
    technologies: [
      { name: "Next.js", description: "React framework for server-side rendering and static generation" },
      { name: "TypeScript", description: "Typed JavaScript for enhanced development experience" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
      { name: "Stripe", description: "Payment processing integration" },
      { name: "MongoDB", description: "Database for product and user information" },
      { name: "NextAuth.js", description: "Authentication for Next.js applications" }
    ],
    challenges: "One of the main challenges was implementing a seamless checkout flow that maintained state across multiple steps while ensuring a responsive user experience. I solved this by using React Context for state management and careful form validation at each step.",
    images: [
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  "task-management": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoLink: "https://demo.example.com/taskapp",
    githubLink: "https://github.com/yourusername/taskapp",
    overview: "This task management application helps teams collaborate effectively with real-time updates, task assignments, and progress tracking features.",
    features: [
      "User authentication and team management",
      "Task creation, assignment, and status tracking",
      "Real-time updates using WebSockets",
      "File attachments and commenting system",
      "Calendar view for deadline management",
      "Customizable project boards and workflows"
    ],
    technologies: [
      { name: "React", description: "JavaScript library for building user interfaces" },
      { name: "Node.js", description: "JavaScript runtime for building the backend" },
      { name: "MongoDB", description: "NoSQL database for storing task and user data" },
      { name: "Socket.io", description: "Library for real-time web applications" },
      { name: "Express", description: "Web framework for Node.js" },
      { name: "JWT", description: "Authentication mechanism" }
    ],
    challenges: "Implementing real-time synchronization across multiple users was challenging, particularly when handling conflicting updates. I resolved this by implementing a version control system for tasks and using WebSockets for immediate state updates.",
    images: [
      "https://images.pexels.com/photos/5717427/pexels-photo-5717427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
};

// Function to get project details or return default data
const getProjectData = (slug: string) => {
  return projectDetails[slug as keyof typeof projectDetails] || {
    title: slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "A detailed project showcasing my skills and expertise.",
    image: "https://images.pexels.com/photos/5926400/pexels-photo-5926400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview: "This project demonstrates my capabilities in building modern web applications with a focus on user experience and performance.",
    features: [
      "Responsive design for all devices",
      "Modern user interface with intuitive navigation",
      "Performance optimization for fast loading times",
      "Accessibility considerations for all users"
    ],
    technologies: [
      { name: "Next.js", description: "React framework for server-side rendering" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" }
    ],
    challenges: "Every project comes with its unique challenges, which I approach with analytical thinking and creative problem-solving.",
    images: [
      "https://images.pexels.com/photos/5926400/pexels-photo-5926400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  };
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjectData(slug);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects" className="inline-flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag) => (
              <Badge key={tag} className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <Button asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button asChild variant="outline">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Source
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <div className="mb-12 rounded-lg overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </AspectRatio>
        </div>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">{project.overview}</p>
          </div>
          
          <Separator />
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.technologies?.map((tech, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <p className="text-muted-foreground">{project.challenges}</p>
          </div>
          
          {project.images && project.images.length > 1 && (
            <>
              <Separator />
              <div>
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}