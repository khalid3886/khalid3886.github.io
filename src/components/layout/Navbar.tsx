import Container from "../common/Container";
import Button from "../common/Button";

import profile from "../../data/profile";
import socials from "../../data/socials";

const navItems = [
    {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Systems",
    href: "#systems",
  },
  {
    label: "Stack",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <a
            href="#"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-sm font-bold text-blue-400">
              MK
            </div>

            <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">
              {profile.name}
            </span>
          </a>

          {/* Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume */}

          <Button
            href={socials.resume}
            target="_blank"
          >
            Resume
          </Button>

        </div>
      </Container>
    </header>
  );
}
