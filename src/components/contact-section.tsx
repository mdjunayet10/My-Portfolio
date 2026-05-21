"use client";

import type { CSSProperties, ComponentType } from "react";
import { type ChangeEvent, type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ExternalLink, Mail, MapPin, MessageSquare } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { contactLinks } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const initialFormValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const successMessage = "Thanks! Your message has been sent successfully.";
const sendErrorMessage = "Something went wrong. Please try again or contact me directly by email.";

type ContactIcon = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

const contactMeta: Record<
  (typeof contactLinks)[number]["type"],
  { icon: ContactIcon; color: string; tone: "light" | "dark" }
> = {
  email: { icon: SiGmail, color: "#EA4335", tone: "light" },
  location: { icon: MapPin, color: "#67E8F9", tone: "dark" },
  github: { icon: FaGithub, color: "#F8FAFC", tone: "dark" },
  linkedin: { icon: FaLinkedinIn, color: "#0A66C2", tone: "dark" },
  facebook: { icon: FaFacebookF, color: "#1877F2", tone: "dark" },
  instagram: { icon: FaInstagram, color: "#E4405F", tone: "dark" },
  youtube: { icon: FaYoutube, color: "#FF0000", tone: "dark" },
};

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isSending = status === "sending";
  const buttonText = status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message";

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== "sending") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  };

  const validateForm = () => {
    const values = Object.values(formValues).map((value) => value.trim());

    if (values.some((value) => !value)) {
      return "Please complete all fields before sending.";
    }

    if (!emailPattern.test(formValues.email.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationMessage = validateForm();

    if (validationMessage) {
      setStatus("error");
      setFeedbackMessage(validationMessage);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedbackMessage(sendErrorMessage);
      return;
    }

    setStatus("sending");
    setFeedbackMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          subject: formValues.subject.trim(),
          message: formValues.message.trim(),
        },
        { publicKey },
      );

      setStatus("success");
      setFeedbackMessage(successMessage);
      setFormValues(initialFormValues);
    } catch {
      setStatus("error");
      setFeedbackMessage(sendErrorMessage);
    }
  };

  return (
    <section
      id="contact"
      className={
        showHeading
          ? "section-shell section-spacing contact-section"
          : "section-shell section-spacing section-after-page-header contact-section"
      }
    >
      {showHeading ? (
        <div data-reveal>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's work together."
            description="Have a project idea, collaboration, or app improvement in mind? Reach out and I can help turn it into a polished build."
          />
        </div>
      ) : null}

      <div className="contact-grid">
        <div className="contact-list" data-reveal>
          {contactLinks.map((contact) => {
            const meta = contactMeta[contact.type] ?? { icon: Mail, color: "#67E8F9", tone: "dark" as const };
            const Icon = meta.icon;
            const isExternal = contact.href.startsWith("http");
            const style = { "--contact-color": meta.color } as CSSProperties;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`contact-link-card contact-logo-card logo-tone-${meta.tone}`}
                style={style}
              >
                <div className="contact-icon contact-logo-wrap">
                  <Icon className="contact-logo" aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-title-row">
                    <h3>{contact.label}</h3>
                  </div>
                  <p>{contact.value}</p>
                </div>
                {isExternal ? <ExternalLink size={16} className="external-icon" /> : null}
              </a>
            );
          })}
        </div>

        <form className="glass-card contact-form" data-reveal onSubmit={handleSubmit} noValidate>
          <div className="form-title">
            <MessageSquare size={22} />
            <h3>Send a message</h3>
          </div>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              disabled={isSending}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formValues.email}
              onChange={handleChange}
              disabled={isSending}
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Project, collaboration, or question"
              value={formValues.subject}
              onChange={handleChange}
              disabled={isSending}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project"
              value={formValues.message}
              onChange={handleChange}
              disabled={isSending}
              required
            />
          </label>
          <p className="form-note">You can also reach me directly through the links provided.</p>

          {feedbackMessage ? (
            <div className={`form-alert ${status === "success" ? "success" : "error"}`} role="status" aria-live="polite">
              {feedbackMessage}
            </div>
          ) : null}

          <button type="submit" className="button-primary form-button" disabled={isSending}>
            {isSending ? <span className="button-spinner" aria-hidden="true" /> : null}
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
