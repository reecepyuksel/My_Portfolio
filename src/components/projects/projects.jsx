import { useState, useEffect } from "react";
import {
  Github,
  Eye,
  Loader,
  Rocket,
  Lightbulb,
  Code,
  CheckCircle,
  BookOpen,
  Link,
} from "lucide-react";
import "./projects.css";
import { projectsData } from "../../../data/Realdata/projectData";
import { useLanguage } from "../../context/language-context";
import { getLocalizedProject } from "../../context/language-data";

const Projects = () => {
  const { language, t } = useLanguage();
  const INITIAL_VISIBLE_PROJECTS = 6;
  const SHOWCASE_PROJECT_IDS = ["11", "1", "5", "4", "9", "2"];

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = () => {
      try {
        setLoading(true);
        setError(null);

        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setProjects([]);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const selectedLocalizedProject = selectedProject
    ? getLocalizedProject(selectedProject, language)
    : null;

  if (loading) {
    return (
      <section className="featured-section" id="projects">
        <div className="featured-container">
          <div className="featured-header">
            <h2 className="featured-title">{t.projects.title}</h2>
            <p className="featured-subtitle">{t.projects.subtitle}</p>
          </div>
          <div className="loading-container">
            <Loader size={50} className="loading-spinner" />
            <p className="loading-text">{t.projects.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="featured-section" id="projects">
        <div className="featured-container">
          <div className="featured-header">
            <h2 className="featured-title">{t.projects.title}</h2>
            <p className="featured-subtitle">{t.projects.subtitle}</p>
          </div>
          <div className="error-container">
            <div className="error-box">
              <div className="error-header">
                <p className="error-text">{t.projects.loadError}</p>
                <button
                  className="error-close-btn"
                  onClick={() => setError(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const orderedProjects = [
    ...SHOWCASE_PROJECT_IDS.map((id) =>
      projects.find((project) => project._id === id),
    ).filter(Boolean),
    ...projects.filter(
      (project) => !SHOWCASE_PROJECT_IDS.includes(project._id),
    ),
  ];

  return (
    <>
      <section className="featured-section" id="projects">
        <div className="featured-container">
          <div className="featured-header">
            <h2 className="featured-title">{t.projects.title}</h2>
            <p className="featured-subtitle">{t.projects.subtitle}</p>
          </div>

          <div className="featured-grid">
            {orderedProjects.slice(0, visibleCount).map((project) => {
              const localizedProject = getLocalizedProject(project, language);

              return (
                <div key={project._id} className="featured-card">
                  <div
                    className="featured-image"
                    style={{ background: project.imageBackground || "#ffffff" }}
                  >
                    <img
                      src={project.img}
                      alt={localizedProject.title}
                      loading="lazy"
                      decoding="async"
                      style={{ objectFit: project.imageFit || "cover" }}
                    />

                    <div className="featured-image-overlay">
                      <button
                        className="featured-icon-btn"
                        title={t.projects.githubLink}
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={20} />
                      </button>

                      <button
                        className="featured-icon-btn"
                        title={t.projects.viewDetails}
                        onClick={() => handleViewDetails(project)}
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="featured-content">
                    <h3 className="featured-card-title">
                      {localizedProject.title}
                    </h3>
                    <p className="featured-card-desc">
                      {localizedProject.description}
                    </p>

                    <div className="featured-tags">
                      {project.tags &&
                        project.tags.map((tag, i) => (
                          <span key={i} className="featured-tag">
                            {tag}
                          </span>
                        ))}
                    </div>
                    <button
                      onClick={() => handleViewDetails(project)}
                      className="featured-view-btn"
                    >
                      {t.projects.viewDetails}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {visibleCount < orderedProjects.length && (
            <div className="featured-cta">
              <button
                className="featured-btn"
                onClick={() => setVisibleCount(orderedProjects.length)}
              >
                {t.projects.loadMore}
              </button>
            </div>
          )}

          {visibleCount >= orderedProjects.length &&
            orderedProjects.length > 0 && (
              <div className="projects-end-text">{t.projects.end}</div>
            )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <h3>{selectedLocalizedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)}>✕</button>
            </div>

            <div className="modal-scrollable">
              <div className="project-slider">
                <img
                  src={selectedProject.images?.[currentImageIndex]}
                  alt="project"
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectFit: selectedProject.imageFit || "cover",
                    background: selectedProject.imageBackground || "#ffffff",
                  }}
                />

                {selectedProject.images &&
                  selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="slider-btn left"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? selectedProject.images.length - 1
                              : prev - 1,
                          )
                        }
                      >
                        ‹
                      </button>

                      <button
                        className="slider-btn right"
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) =>
                              (prev + 1) % selectedProject.images.length,
                          )
                        }
                      >
                        ›
                      </button>
                    </>
                  )}
              </div>

              <div className="description">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <BookOpen size={18} className="dis-logo" />
                  {t.projects.description}
                </h4>
                <p>
                  {selectedLocalizedProject.fullDescription ||
                    selectedProject.fullDescription}
                </p>
              </div>

              <div className="project-details-grid">
                <section>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CheckCircle size={18} className="cir-logo" />{" "}
                    {t.projects.features}
                  </h4>
                  <ul style={{ "--bullet-color": "rgb(17, 205, 17)" }}>
                    {(selectedLocalizedProject.features ||
                      selectedProject.features) &&
                      (
                        selectedLocalizedProject.features ||
                        selectedProject.features
                      ).map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </section>

                <section>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Code size={18} className="cod-logo" />{" "}
                    {t.projects.techStack}
                  </h4>
                  <ul style={{ "--bullet-color": "#006eff" }}>
                    {selectedProject.techStack &&
                      selectedProject.techStack.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                  </ul>
                </section>

                <section>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Lightbulb size={18} className="bra-logo" />{" "}
                    {t.projects.keyLearnings}
                  </h4>
                  <ul style={{ "--bullet-color": "#000000" }}>
                    {(selectedLocalizedProject.keyLearnings ||
                      selectedProject.keyLearnings) &&
                      (
                        selectedLocalizedProject.keyLearnings ||
                        selectedProject.keyLearnings
                      ).map((k, i) => <li key={i}>{k}</li>)}
                  </ul>
                </section>

                <section>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Rocket size={18} className="roc-logo" />{" "}
                    {t.projects.futureImprovements}
                  </h4>
                  <ul style={{ "--bullet-color": "#9b3ffe" }}>
                    {(selectedLocalizedProject.futureImprovements ||
                      selectedProject.futureImprovements) &&
                      (
                        selectedLocalizedProject.futureImprovements ||
                        selectedProject.futureImprovements
                      ).map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </section>

                <section className="project-links">
                  <h4>
                    <Link size={18} className="plink" />{" "}
                    {t.projects.projectLinks}
                  </h4>
                  <div className="project-links1">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={20} className="logo" />{" "}
                      {t.projects.githubRepository}
                    </a>
                    <a
                      href={selectedProject.documentation}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BookOpen size={20} className="logo" />{" "}
                      {t.projects.documentation}
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
