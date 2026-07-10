import type { ReactNode } from "react";
import { Mail, Download } from "lucide-react";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

import socials from "../data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <Container>
        <SectionHeading
          title="Let's Build Something Great"
          subtitle="I'm currently open to Backend Engineering, AI and Distributed Systems opportunities. Feel free to reach out if you'd like to collaborate or discuss an exciting project."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ContactCard
            icon={<Mail size={22} />}
            href={socials.email}
            title="Email"
            subtitle="mohdkhalid3886@gmail.com"
          />

          <ContactCard
            icon={<GitHubIcon />}
            href={socials.github}
            title="GitHub"
            subtitle="github.com/khalid3886"
          />

          <ContactCard
            icon={<LinkedInIcon />}
            href={socials.linkedin}
            title="LinkedIn"
            subtitle="linkedin.com/in/mohd-khalid-agentic"
          />

          <ContactCard
            icon={<Download size={22} />}
            href={socials.resume}
            title="Resume"
            subtitle="Download PDF"
          />
        </div>
      </Container>
    </section>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

function ContactCard({
  icon,
  title,
  subtitle,
  href,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-zinc-900
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          text-blue-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
          {subtitle}
        </p>
      </div>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.06 0 0 .98-.31 3.18 1.18.93-.26 1.92-.39 2.91-.39s1.98.13 2.91.39c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.17c0 .31.21.67.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.02h4.44V23H.28V8.02Zm7.31 0h4.25v2.05h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.96 5.32 6.81V23h-4.43v-7.46c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H7.59V8.02Z" />
    </svg>
  );
}