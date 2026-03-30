import { TypeAnimation } from "react-type-animation";
import {
  FaDownload,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import recePhoto from "../../../data/screenshots/rece.png";
import "./home.css";
import { useLanguage } from "../../context/language-context";

const Hero = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    window.open("/Recep-Yuksel_EN.pdf", "_blank");
  };

  return (
    <section className="hero section-bg" id="home">
      <div className="section-content">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__greeting">
              <div className="hero__badge">
                <span className="hero__badge-dot"></span>
                {t.home.available}
              </div>

              <h1 className="hero__intro">
                {t.home.intro} <span className="hero__name">Recep Yüksel</span>
              </h1>
            </div>

            <div className="hero__titles">
              <h2 className="hero__title">
                <TypeAnimation
                  sequence={[
                    t.home.roles[0],
                    2000,
                    t.home.roles[1],
                    2000,
                    t.home.roles[2],
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="hero__typewriter"
                />
              </h2>
            </div>

            <p className="hero__description">{t.home.description}</p>

            <div className="hero__buttons">
              <button
                className="hero__btn hero__btn--primary"
                onClick={handleDownloadCV}
                aria-label="Download CV"
              >
                <FaDownload className="hero__btn-icon" />
                {t.home.resume}
              </button>

              <a
                href="#projects"
                className="hero__btn hero__btn--secondary"
                aria-label="View my projects"
              >
                {t.home.explore}
                <FaArrowRight className="hero__btn-icon" />
              </a>
            </div>

            <div className="hero__social">
              <span className="hero__social-label">{t.home.connect}</span>

              <div className="hero__social-icons">
                <a
                  href="https://linkedin.com/in/recepyuksell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/reecepyuksel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link github_profile"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:recepyyuksel@gmail.com"
                  className="hero__social-link email"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <div className="hero__profile-image-circle">
                <div className="hero__image-inner-circle">
                  <img
                    src={recePhoto}
                    alt="Recep Yüksel - Full-Stack Developer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
