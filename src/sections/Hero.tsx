import { MapPin } from "lucide-react";

import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Badge from "../components/common/Badge";

import profile from "../data/profile";
import socials from "../data/socials";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-16">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

           <div className="pt-10 sm:pt-6 lg:pt-0">
  <Badge>Backend • AI • Distributed Systems</Badge>
</div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
              {profile.name}
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-zinc-200">
              {profile.title}
            </h2>

            <p className="mt-4 text-lg text-zinc-300">
              {profile.subtitle}
            </p>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                href={socials.resume}
                target="_blank"
              >
                Resume
              </Button>

              <Button
                href={socials.github}
                variant="secondary"
                target="_blank"
              >
                GitHub
              </Button>

              <Button
                href={socials.linkedin}
                variant="secondary"
                target="_blank"
              >
                LinkedIn
              </Button>

            </div>

            <div className="mt-10 flex items-center gap-2 text-zinc-500">
              <MapPin size={18} />
              {profile.location}
            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Engineering Snapshot
            </p>

            <div className="mt-8 space-y-8">

              <Stat
                value="10,000+"
                label="Users Served"
              />

              <Stat
                value="100,000+"
                label="Travel Bookings"
              />

              <Stat
                value="Backend"
                label="Systems Engineering"
              />

              <Stat
                value="AI"
                label="Production Applications"
              />

              <Stat
                value="AWS"
                label="Distributed Architecture"
              />

              <Stat
                value="Node.js"
                label="Primary Stack"
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">

      <span className="text-4xl font-bold text-white">
        {value}
      </span>

      <span className="text-sm text-zinc-400">
        {label}
      </span>

    </div>
  );
}
