"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "devops" | "other";
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "CSS/Tailwind", level: 90, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    
    // DevOps
    { name: "Docker", level: 75, category: "devops" },
    { name: "CI/CD", level: 70, category: "devops" },
    { name: "AWS", level: 65, category: "devops" },
    { name: "Kubernetes", level: 60, category: "devops" },
    
    // Other
    { name: "Git", level: 85, category: "other" },
    { name: "Problem Solving", level: 85, category: "other" },
  ];
  
  const categories = [
    { id: "frontend", name: t.skills.categories.frontend },
    { id: "backend", name: t.skills.categories.backend },
    { id: "devops", name: t.skills.categories.devops },
    { id: "other", name: t.skills.categories.other },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">{t.skills.title}</h2>
          <p className="text-lg text-muted-foreground text-center">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="p-6">
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}