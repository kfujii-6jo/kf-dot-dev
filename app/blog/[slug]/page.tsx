import Link from "next/link";
import { ChevronLeft, CalendarIcon, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
  const blogSlugs = [
    "getting-started-nextjs-typescript",
    "responsive-uis-tailwind",
    "state-management-react",
    "restful-api-design",
    "nodejs-express-setup",
    "website-performance-optimization",
    "caching-strategies",
    "ui-design-principles",
    "creating-design-system"
  ];
  
  return blogSlugs.map((slug) => ({
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
    title: `${title} | Blog | My Portfolio`,
    description: `Read about ${title} on my blog`,
  };
}

// Sample blog post data for demonstration
// In a real application, this would come from a CMS or database
const blogPosts = {
  "getting-started-nextjs-typescript": {
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "Learn how to set up a modern web application using Next.js and TypeScript.",
    date: "June 15, 2023",
    readTime: "5 min read",
    author: "Your Name",
    tags: ["Next.js", "TypeScript", "React", "Web Development"],
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful React framework that enables features such as server-side rendering, static site generation, and TypeScript support out of the box. Combined with TypeScript, it provides a robust foundation for building type-safe, modern web applications.</p>
      
      <h2>Setting Up Your Development Environment</h2>
      <p>Before we begin, make sure you have Node.js installed on your machine. You can check by running \`node -v\` in your terminal. For the best experience, use the latest LTS version.</p>
      
      <h2>Creating a New Next.js Project with TypeScript</h2>
      <p>The easiest way to get started is by using the Create Next App tool with the TypeScript template:</p>
      
      <pre><code>npx create-next-app@latest my-app --typescript</code></pre>
      
      <p>This command creates a new Next.js project with TypeScript configuration already set up for you.</p>
      
      <h2>Project Structure</h2>
      <p>After creating your project, you'll notice the following key files and directories:</p>
      
      <ul>
        <li><strong>pages/</strong>: Contains your application's pages and API routes</li>
        <li><strong>public/</strong>: Static assets like images and fonts</li>
        <li><strong>styles/</strong>: CSS files for styling your application</li>
        <li><strong>tsconfig.json</strong>: TypeScript configuration</li>
        <li><strong>next.config.js</strong>: Next.js configuration</li>
      </ul>
      
      <h2>Creating Your First TypeScript Component</h2>
      <p>Let's create a simple TypeScript component in Next.js:</p>
      
      <pre><code>// components/Greeting.tsx
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;</code></pre>
      
      <h2>Using the Component in a Page</h2>
      <p>Now let's use our component in a page:</p>
      
      <pre><code>// pages/index.tsx
import type { NextPage } from 'next';
import Greeting from '../components/Greeting';

const Home: NextPage = () => {
  return (
    <div>
      <Greeting name="Next.js Developer" />
    </div>
  );
};

export default Home;</code></pre>
      
      <h2>Running Your Application</h2>
      <p>Run your application with the following command:</p>
      
      <pre><code>npm run dev</code></pre>
      
      <p>Your Next.js application will be available at http://localhost:3000.</p>
      
      <h2>Conclusion</h2>
      <p>You've now set up a Next.js project with TypeScript support! This is just the beginning of what you can build with these powerful technologies. As you continue to develop your application, you'll appreciate the type safety that TypeScript provides and the developer experience that Next.js offers.</p>
    `,
    related: [
      {
        title: "Building Responsive UIs with Tailwind CSS",
        link: "/blog/responsive-uis-tailwind"
      },
      {
        title: "State Management in React Applications",
        link: "/blog/state-management-react"
      }
    ]
  },
  "responsive-uis-tailwind": {
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
    date: "May 22, 2023",
    readTime: "8 min read",
    author: "Your Name",
    tags: ["CSS", "Tailwind CSS", "Responsive Design", "UI Development"],
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom user interfaces rapidly without writing custom CSS. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs.</p>
      
      <h2>Setting Up Tailwind CSS</h2>
      <p>To get started with Tailwind CSS in your project, you'll need to install it as a dependency:</p>
      
      <pre><code>npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>This creates a basic Tailwind configuration file. Next, you'll need to configure your template paths in tailwind.config.js:</p>
      
      <pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <h2>Creating Your First Responsive Layout</h2>
      <p>Let's create a simple responsive layout with Tailwind CSS:</p>
      
      <pre><code>// components/ResponsiveLayout.jsx
export default function ResponsiveLayout() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">Column 1</div>
        <div className="bg-blue-100 p-4 rounded">Column 2</div>
        <div className="bg-blue-100 p-4 rounded">Column 3</div>
      </div>
    </div>
  );
}</code></pre>
      
      <h2>Responsive Design with Tailwind</h2>
      <p>Tailwind makes responsive design simple with its built-in breakpoint prefixes:</p>
      
      <ul>
        <li><strong>sm:</strong> Small screens (640px and up)</li>
        <li><strong>md:</strong> Medium screens (768px and up)</li>
        <li><strong>lg:</strong> Large screens (1024px and up)</li>
        <li><strong>xl:</strong> Extra large screens (1280px and up)</li>
        <li><strong>2xl:</strong> 2X large screens (1536px and up)</li>
      </ul>
      
      <h2>Building a Responsive Navbar</h2>
      <p>Here's an example of a responsive navbar using Tailwind CSS:</p>
      
      <pre><code>// components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">My Website</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a powerful approach to building responsive user interfaces. By leveraging its utility classes and responsive prefixes, you can create complex layouts that adapt beautifully to different screen sizes without writing custom CSS.</p>
    `,
    related: [
      {
        title: "Getting Started with Next.js and TypeScript",
        link: "/blog/getting-started-nextjs-typescript"
      },
      {
        title: "Principles of Good UI Design",
        link: "/blog/ui-design-principles"
      }
    ]
  }
};

// Function to get blog post data or return default data
const getBlogPostData = (slug: string) => {
  return blogPosts[slug as keyof typeof blogPosts] || {
    title: slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    excerpt: "An informative article about web development and design.",
    date: "January 1, 2023",
    readTime: "5 min read",
    author: "Your Name",
    tags: ["Web Development", "Design"],
    content: `
      <h2>Introduction</h2>
      <p>This is a sample blog post template. In a real application, this content would be loaded from a CMS or database.</p>
      
      <h2>Main Content</h2>
      <p>Your detailed article content would go here, with proper formatting, code examples, and possibly images or other media.</p>
      
      <h2>Conclusion</h2>
      <p>Summarize your main points and provide any closing thoughts or calls to action.</p>
    `,
    related: [
      {
        title: "Getting Started with Next.js and TypeScript",
        link: "/blog/getting-started-nextjs-typescript"
      },
      {
        title: "Building Responsive UIs with Tailwind CSS",
        link: "/blog/responsive-uis-tailwind"
      }
    ]
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlogPostData(slug);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog" className="inline-flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
            <div className="text-sm">
              By {post.author}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal flex items-center">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <Separator className="my-12" />
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {post.related?.map((relatedPost, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-2">
                  <Link href={relatedPost.link} className="hover:underline">
                    {relatedPost.title}
                  </Link>
                </h3>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href={relatedPost.link}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}