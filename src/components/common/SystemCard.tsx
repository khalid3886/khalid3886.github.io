import type { ReactNode } from "react";

interface FlowStep {
  title: string;
  description: string;
}

interface SystemCardProps {
  title: string;
  tagline: string;

  challenge: string;
  solution: string;

  flow: FlowStep[];

  engineeringDecisions: string[];

  highlights: string[];

  impact: string[];

  stack: string[];
}

export default function SystemCard({
  title,
  tagline,
  challenge,
  solution,
  flow,
  engineeringDecisions,
  highlights,
  impact,
  stack,
}: SystemCardProps) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-10
        transition-all
        duration-300
        hover:border-blue-500/20
        hover:shadow-2xl
        hover:shadow-blue-500/5
      "
    >
      {/* Header */}

      <header className="mb-12">

        <h3 className="text-4xl font-bold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          {tagline}
        </p>

      </header>

      <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT COLUMN */}

        <div>

          <SectionCard
            title="Challenge"
            content={challenge}
          />

          <SectionCard
            title="Solution"
            content={solution}
          />

          <SectionTitle>
            Engineering Decisions
          </SectionTitle>

          <ul className="mt-5 space-y-4">

            {engineeringDecisions.map((decision) => (
              <li
                key={decision}
                className="flex gap-3"
              >
                <span className="mt-1 text-blue-400">
                  ✓
                </span>

                <p className="leading-7 text-zinc-400">
                  {decision}
                </p>

              </li>
            ))}

          </ul>

          <div className="mt-12">

            <SectionTitle>

              Engineering Highlights

            </SectionTitle>

            <div className="mt-5 flex flex-wrap gap-3">

              {highlights.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    text-blue-300
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-12">

            <SectionTitle>

              Impact

            </SectionTitle>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">

              {impact.map((item) => (

                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    px-4
                    py-3
                  "
                >
                  <span className="text-blue-400">
                    ✓
                  </span>

                  <span className="text-zinc-300">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div>

          <SectionTitle>

            System Flow

          </SectionTitle>

          <div className="mt-8">

            {flow.map((step, index) => (

              <div
                key={step.title}
                className="relative flex gap-5 pb-8"
              >

                {/* Timeline */}

                <div className="flex flex-col items-center">

                  <div
                    className="
                      z-10
                      h-5
                      w-5
                      rounded-full
                      border-2
                      shadow-lg
shadow-blue-500/30
                      border-blue-500
                      bg-zinc-950
                    "
                  />

                  {index !== flow.length - 1 && (

                    <div
                      className="
                        mt-2
                        h-full
                        w-px
                        bg-zinc-700
                      "
                    />

                  )}

                </div>

                {/* Card */}

                <div
                  className="
                    flex-1
                    transition-all
duration-300
hover:border-blue-500/20
hover:bg-zinc-900
                    p-5
                  "
                >

                  <h4 className="font-semibold text-white">

                    {step.title}

                  </h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">

                    {step.description}

                  </p>

                </div>

              </div>

            ))}

          </div>
                    <div className="mt-12">

            <SectionTitle>

              Technologies

            </SectionTitle>

            <div className="mt-5 flex flex-wrap gap-3">

              {stack.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-zinc-700
                    bg-zinc-950
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </article>
  );
}

interface SectionCardProps {
  title: string;
  content: string;
}

function SectionCard({
  title,
  content,
}: SectionCardProps) {
  return (
    <div
     className="
mb-8
rounded-2xl
border
border-zinc-800
bg-zinc-950/60
p-6
transition-all
duration-300
hover:border-blue-500/20
hover:bg-zinc-900
"
    >
      <SectionTitle>

        {title}

      </SectionTitle>

      <p className="mt-4 leading-8 text-zinc-400">

        {content}

      </p>

    </div>
  );
}

interface SectionTitleProps {
  children: ReactNode;
}

function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h4
      className="
        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]
        text-blue-400
      "
    >
      {children}
    </h4>
  );
}