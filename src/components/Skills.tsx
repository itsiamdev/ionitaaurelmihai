const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs","Supabase"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "CI/CD", "VS Code"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Work", "Communication", "Agile", "Leadership"],
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
