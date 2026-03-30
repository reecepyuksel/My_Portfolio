import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import { useLanguage } from "../../context/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-bg">
      <div className="section-content">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__grid">
              <div className="footer__section">
                <h3 className="footer__section-title">{t.footer.connect}</h3>
                <div className="footer__social">
                  <div className="social__icons">
                    <a
                      href="https://linkedin.com/in/recepyuksell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social__link linkedin"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/reecepyuksel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social__link github_profile"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="mailto:recepyyuksel@gmail.com"
                      className="social__link email"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                  <p className="social__text">{t.footer.socialText}</p>
                </div>
              </div>

              <div className="footer__section">
                <h3 className="footer__section-title">{t.footer.quickLinks}</h3>
                <ul className="footer__links">
                  <li>
                    <a href="#home" className="footer__link">
                      {t.navbar.home}
                    </a>
                  </li>

                  <li>
                    <a href="#projects" className="footer__link">
                      {t.navbar.projects}
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="footer__link">
                      {t.navbar.skills}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer__link">
                      {t.navbar.contact}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__section">
                <h3 className="footer__section-title">
                  {t.footer.contactInfo}
                </h3>
                <div className="footer__contact">
                  <a
                    href="mailto:recepyyuksel@gmail.com"
                    className="contact__item"
                  >
                    <FaEnvelope className="contact__icon" />
                    <span className="contact__text">
                      recepyyuksel@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com/in/recepyuksell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__item"
                  >
                    <FaLinkedin className="contact__icon" />
                    <span className="contact__text">
                      linkedin.com/in/recepyuksell
                    </span>
                  </a>
                </div>
              </div>

              <div className="footer__section">
                <h3 className="footer__section-title">
                  {t.footer.stayConnected}
                </h3>
                <div className="footer__cta">
                  <p className="cta__text">{t.footer.cta}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p className="copyright__text">
                Copyright © {currentYear} by{" "}
                <span className="copyright__name">Recep Yüksel</span> |{" "}
                {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
