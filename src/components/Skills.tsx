const Skills = () => {
  const skills = [
    {
      category: "Limbaje de Programare",
      items: ["C", "C++", "C#", "JavaScript"],
    },
    {
      category: "Web Development",
      items: ["HTML5", "CSS3", "React", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Baze de Date",
      items: ["MongoDB", "PostgreSQL", "Supabase"],
    },
    {
      category: "Game Development",
      items: ["Unity"],
    },
    {
      category: "Editoare de Cod",
      items: ["Sublime Text", "VS Code", "IntelliJ IDEA", "Cursor AI"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Vercel", "REST APIs"],
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
            <h3 className="text-primary mb-6">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
