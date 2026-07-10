import { CheckCircle2 } from "lucide-react";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

import experience from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>

        <SectionHeading
          title="Experience"
          subtitle="Building production backend systems, distributed architectures and AI-powered applications."
        />

        {experience.map((job) => (
          <div
            key={job.company}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-10
              transition-all
              duration-300
              hover:border-blue-500/20
              hover:shadow-xl
              hover:shadow-blue-500/5
            "
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  {job.role}
                </h3>

                <p className="mt-2 text-lg text-blue-400">
                  {job.company}
                </p>

              </div>

              <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
                {job.duration}
              </span>

            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
              {job.description}
            </p>

            <div className="mt-10">

              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Key Contributions
              </h4>

              <ul className="space-y-5">

                {job.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-blue-400"
                    />

                    <span className="leading-7 text-zinc-300">
                      {item}
                    </span>

                  </li>
                ))}

              </ul>

            </div>

          </div>
        ))}

      </Container>
    </section>
  );
}