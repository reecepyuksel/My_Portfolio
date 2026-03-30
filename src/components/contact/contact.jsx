import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import "./contact.css";
import { useLanguage } from "../../context/language-context";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showStatusMessage = (type, message) => {
    setStatus({ type, message });
    setShowStatus(true);

    const timeout = type === "success" ? 5000 : 7000;
    setTimeout(() => {
      setShowStatus(false);
    }, timeout);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      showStatusMessage("error", t.contact.fillRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showStatusMessage("error", t.contact.invalidEmail);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      showStatusMessage("error", t.contact.emailServiceMissing);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          to_email: "recepyyuksel@gmail.com",
        },
        {
          publicKey,
        },
      );

      showStatusMessage("success", t.contact.messageSent);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error details:", err);

      let errorMessage = err?.text || err?.message || t.contact.messageFailed;

      showStatusMessage("error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const closeStatusModal = () => {
    setShowStatus(false);
  };

  return (
    <>
      {showStatus && (
        <div className="status-overlay" onClick={closeStatusModal}>
          <div
            className={`status-modal ${status.type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="status-close-btn" onClick={closeStatusModal}>
              <FaTimes />
            </button>

            <div className="status-icon">
              {status.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}
            </div>

            <h3 className="status-title">
              {status.type === "success"
                ? t.contact.successTitle
                : t.contact.errorTitle}
            </h3>

            <p className="status-message">{status.message}</p>

            <div className="status-actions">
              <button
                className="status-ok-btn"
                onClick={closeStatusModal}
                autoFocus
              >
                {t.contact.ok}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="contact section-bg" id="contact">
        <div className="section-content">
          <div className="contact__container">
            <div className="contact__header">
              <h2 className="contact__title">{t.contact.title}</h2>
              <p className="contact__intro">{t.contact.intro}</p>
            </div>

            <div className="contact__wrapper">
              <div className="contact__info">
                <a
                  href="mailto:recepyyuksel@gmail.com"
                  className="contact__info-card"
                >
                  <div className="contact__info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">{t.contact.email}</h3>
                    <p className="contact__info-text">recepyyuksel@gmail.com</p>
                    <p className="contact__info-subtext">
                      {t.contact.replyTime}
                    </p>
                  </div>
                </a>

                <a href="tel:+905345567703" className="contact__info-card">
                  <div className="contact__info-icon">
                    <FaPhone />
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">{t.contact.phone}</h3>
                    <p className="contact__info-text">+90 534 556 7703</p>
                    <p className="contact__info-subtext">
                      {t.contact.phoneHours}
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Alanya,Antalya,Turkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-card"
                >
                  <div className="contact__info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact__info-content">
                    <h3 className="contact__info-title">
                      {t.contact.location}
                    </h3>
                    <p className="contact__info-text">
                      Alanya, Antalya, Türkiye
                    </p>
                    <p className="contact__info-subtext">{t.contact.remote}</p>
                  </div>
                </a>
              </div>

              <div className="contact__form-section">
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form__row">
                    <div className="form__group">
                      <label htmlFor="fullName" className="form__label">
                        {t.contact.fullName} <span className="required">*</span>
                      </label>
                      <div className="input-box">
                        <FaUser className="input-icon" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder={t.contact.enterFullName}
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="email" className="form__label">
                        {t.contact.emailAddress}{" "}
                        <span className="required">*</span>
                      </label>
                      <div className="input-box">
                        <FaEnvelope className="input-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder={t.contact.enterEmail}
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="form__input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form__row">
                    <div className="form__group">
                      <label htmlFor="phone" className="form__label">
                        {t.contact.phoneNumber}
                      </label>
                      <div className="input-box">
                        <FaPhone className="input-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder={t.contact.enterPhone}
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={loading}
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="subject" className="form__label">
                        {t.contact.subject} <span className="required">*</span>
                      </label>
                      <div className="input-box">
                        <FaTag className="input-icon" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder={t.contact.whatAbout}
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="form__input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form__group full-width">
                    <label htmlFor="message" className="form__label">
                      {t.contact.message} <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.inquiry}
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="form__textarea"
                    ></textarea>
                  </div>

                  <div className="form__submit">
                    <button
                      type="submit"
                      className="contact__submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span>{t.contact.sending}</span>
                          <div className="contact__spinner"></div>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.send}</span>
                          <FaPaperPlane className="contact__submit-icon" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
