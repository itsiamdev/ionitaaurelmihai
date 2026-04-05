import { Code2, Globe, Database, Gamepad2, FileCode, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Limbaje de Programare",
      icon: Code2,
      items: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ],
    },
    {
      category: "Web Development",
      icon: Globe,
      items: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ],
    },
    {
      category: "Baze de Date",
      icon: Database,
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
      ],
    },
    {
      category: "Game Development",
      icon: Gamepad2,
      items: [
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" }
      ],
    },
    {
      category: "Editoare de Cod",
      icon: FileCode,
      items: [
        { name: "Sublime Text", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sublime/sublime-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "Cursor AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg" }
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
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
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
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
