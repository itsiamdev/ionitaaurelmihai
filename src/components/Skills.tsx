import { Code2, Globe, Database, Gamepad2, FileCode, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Limbaje de Programare",
      icon: Code2,
      items: [
        { name: "C", icon: "C" },
        { name: "C++", icon: "C++" },
        { name: "C#", icon: "C#" },
        { name: "JavaScript", icon: "JS" }
      ],
    },
    {
      category: "Web Development",
      icon: Globe,
      items: [
        { name: "HTML5", icon: "HTML" },
        { name: "CSS3", icon: "CSS" },
        { name: "React", icon: "React" },
        { name: "Node.js", icon: "Node" },
        { name: "Express.js", icon: "Express" },
        { name: "Tailwind CSS", icon: "Tailwind" },
        { name: "Bootstrap", icon: "Bootstrap" }
      ],
    },
    {
      category: "Baze de Date",
      icon: Database,
      items: [
        { name: "MongoDB", icon: "MongoDB" },
        { name: "PostgreSQL", icon: "PostgreSQL" },
        { name: "Supabase", icon: "Supabase" }
      ],
    },
    {
      category: "Game Development",
      icon: Gamepad2,
      items: [
        { name: "Unity", icon: "Unity" }
      ],
    },
    {
      category: "Editoare de Cod",
      icon: FileCode,
      items: [
        { name: "Sublime Text", icon: "Sublime" },
        { name: "VS Code", icon: "VSCode" },
        { name: "IntelliJ IDEA", icon: "IntelliJ" },
        { name: "Cursor AI", icon: "Cursor" }
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      items: [
        { name: "Git", icon: "Git" },
        { name: "GitHub", icon: "GitHub" },
        { name: "Vercel", icon: "Vercel" },
        { name: "REST APIs", icon: "API" }
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-card/30">
      <h2 className="text-center mb-16">
        Skills & <span className="text-gradient">Tehnologii</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-card p-8 rounded-lg border border-border card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <skillGroup.icon className="w-6 h-6 text-primary" />
              <h3 className="text-primary">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className="w-6 h-6 flex items-center justify-center bg-primary/10 rounded text-xs">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
