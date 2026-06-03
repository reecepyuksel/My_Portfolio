import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaDatabase, FaGit } from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiSwagger,
  SiTailwindcss,
  SiPython,
  SiSqlite,
  SiNestjs,
  SiPostgresql,
  SiSwift,
  SiKotlin,
  SiDotnet,
  SiCsharp,
  SiVisualstudiocode,
} from "react-icons/si";
import "./skills.css";
import { useLanguage } from "../../context/language-context";

export default function Skills() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const skillsData = {
    programming: [
      { name: "Python", icon: <SiPython />, category: "programming" },
      { name: "JavaScript", icon: <SiJavascript />, category: "programming" },
      { name: "SQL", icon: <SiSqlite />, category: "programming" },
      { name: "C#", icon: <SiCsharp />, category: "programming" },
      { name: "Swift", icon: <SiSwift />, category: "programming" },
      { name: "Kotlin", icon: <SiKotlin />, category: "programming" },
    ],
    frontend: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript />,
        category: "frontend",
      },
      { name: "HTML5 & CSS3", icon: <SiHtml5 />, category: "frontend" },
      { name: "Bootstrap", icon: <SiBootstrap />, category: "frontend" },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        category: "frontend",
      },
    ],
    backend: [
      { name: "NestJS", icon: <SiNestjs />, category: "backend" },
      { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
      { name: ".NET", icon: <SiDotnet />, category: "backend" },
      { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
      { name: "MS SQL Server", icon: <FaDatabase />, category: "backend" },
      {
        name: "RESTful API Development",
        icon: <FaNodeJs />,
        category: "backend",
      },
      { name: "Sequelize ORM", icon: <FaDatabase />, category: "backend" },
      { name: "TypeORM", icon: <FaDatabase />, category: "backend" },
    ],
    tools: [
      { name: "Git", icon: <FaGit />, category: "tools" },
      { name: "GitHub", icon: <FaGithub />, category: "tools" },
      { name: "Docker", icon: <SiDocker />, category: "tools" },
      {
        name: "VS Code & Visual Studio",
        icon: <SiVisualstudiocode />,
        category: "tools",
      },
      { name: "Postman", icon: <SiPostman />, category: "tools" },
      { name: "Swagger", icon: <SiSwagger />, category: "tools" },
    ],
  };

  const allSkills = [
    ...skillsData.programming,
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.tools,
  ];

  const filters = [
    { id: "all", label: t.skills.filters.all },
    { id: "programming", label: t.skills.filters.programming },
    { id: "frontend", label: t.skills.filters.frontend },
    { id: "backend", label: t.skills.filters.backend },
    { id: "tools", label: t.skills.filters.tools },
  ];

  const displayedSkills =
    activeFilter === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <section className="skills-wrapper" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">{t.skills.title}</h2>
          <p className="skills-intro">{t.skills.intro}</p>
        </div>

        <div className="skills-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {displayedSkills.map((skill) => (
            <div key={skill.name} className="skills-card">
              <div className="skills-icon">{skill.icon}</div>
              <div className="skills-content">
                <h3 className="skills-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
