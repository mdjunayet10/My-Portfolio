import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { owner, socialLinks } from "@/data/portfolio";

const socialIcons = {
  email: Mail,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <div>
          <Link href="/" className="code-logo footer-logo">
            &lt; Junayet /&gt;
          </Link>
          <p>Building useful digital products with clean design and real functionality.</p>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.type] ?? Mail;
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <span>Copyright © {new Date().getFullYear()} {owner.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
