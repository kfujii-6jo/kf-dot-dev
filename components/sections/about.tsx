'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  // Sample career data
  const careerTimeline = [
    {
      period: "2020 - Present",
      role: "Senior Developer",
      company: "Tech Company",
      description: "Leading development of web applications using modern technologies."
    },
    {
      period: "2018 - 2020",
      role: "Frontend Developer",
      company: "Digital Agency",
      description: "Built responsive web interfaces and implemented UI/UX designs."
    },
    {
      period: "2016 - 2018",
      role: "Junior Developer",
      company: "Startup",
      description: "Worked on full-stack development with React and Node.js."
    }
  ];

  // Sample education data
  const education = [
    {
      period: "2012 - 2016",
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      description: "Focus on software engineering and web technologies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground text-center">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="p-6 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6">{t.about.title}</h3>
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground">
                  I'm a passionate developer with 5+ years of experience creating web applications.
                  I specialize in building scalable, user-friendly solutions using modern technologies
                  and best practices. My approach combines technical expertise with a deep understanding
                  of user needs and business requirements.
                </p>
                <p className="text-muted-foreground">
                  Throughout my career, I've worked on diverse projects ranging from e-commerce platforms
                  to enterprise applications. I'm particularly interested in performance optimization,
                  clean architecture, and creating maintainable codebases that stand the test of time.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me contributing to open-source projects, writing
                  technical articles, or exploring new technologies. I believe in continuous learning
                  and staying updated with the latest industry trends.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge>Problem Solver</Badge>
                <Badge>Team Player</Badge>
                <Badge>Clean Code</Badge>
                <Badge>Agile Methodology</Badge>
                <Badge>Performance Optimization</Badge>
                <Badge>Technical Writing</Badge>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="#" download>
                  <Download className="mr-2 h-4 w-4" /> {t.about.downloadResume}
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2 h-5 w-5" /> {t.about.career}
            </h3>
            <div className="space-y-6">
              {careerTimeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="text-sm text-muted-foreground mb-1">{item.period}</div>
                  <h4 className="text-lg font-medium">{item.role}</h4>
                  <div className="text-sm font-medium text-primary mb-2">{item.company}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-6 mt-8 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" /> {t.about.education}
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="text-sm text-muted-foreground mb-1">{item.period}</div>
                  <h4 className="text-lg font-medium">{item.degree}</h4>
                  <div className="text-sm font-medium text-primary mb-2">{item.institution}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}