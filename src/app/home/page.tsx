
import Image from "next/image";
import { ArrowRight, Code, Palette, Zap, Download, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  const skills = [
    { icon: Code, label: 'Full Stack Development', color: 'text-blue-500' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-purple-500' },
    { icon: Zap, label: 'Performance Optimization', color: 'text-yellow-500' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            kfujii.dev
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & UI/UX Designer passionate about creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
      </div>   
    </section>
  );
}
