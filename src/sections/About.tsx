import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <Container>

        <SectionHeading
          title="About"
          subtitle="Building scalable backend systems and production AI applications."
        />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">

          {/* Left */}

          <div className="space-y-6 text-lg leading-8 text-zinc-400">

            <p>
              I'm a Software Engineer specializing in backend systems,
              distributed architectures and AI-powered applications. My work
              focuses on designing reliable systems that automate complex
              business workflows through event-driven architectures,
              intelligent document processing and scalable backend services.
            </p>

            <p>
              At Flyo.ai, I've contributed to production platforms serving
              more than <strong className="text-white">10,000 users</strong>
              and supporting over{" "}
              <strong className="text-white">
                100,000 travel bookings
              </strong>
              , building systems that integrate LLMs, browser automation,
              asynchronous workflows and cloud infrastructure into reliable
              production solutions.
            </p>

            <p>
              I enjoy solving engineering challenges involving scalability,
              observability, automation and AI, with a strong focus on writing
              maintainable software that delivers measurable business value.
            </p>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-xl font-semibold">
              What I Enjoy Building
            </h3>

            <div className="mt-8 space-y-4">

              <Item text="Backend Systems" />

              <Item text="Distributed Architectures" />

              <Item text="AI Applications" />

              <Item text="LLM Workflows" />

              <Item text="Multi-Agent Systems" />

              <Item text="Browser Automation" />

              <Item text="Event-driven Pipelines" />

              <Item text="Production APIs" />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

interface ItemProps {
  text: string;
}

function Item({ text }: ItemProps) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-2 w-2 rounded-full bg-blue-500" />

      <span className="text-zinc-300">
        {text}
      </span>

    </div>
  );
}