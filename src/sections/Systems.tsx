import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import SystemCard from "../components/common/SystemCard";

import systems from "../data/systems";

export default function Systems() {
  return (
    <section
      id="systems"
      className="py-28"
    >
      <Container>

        <SectionHeading
          title="Engineering Systems"
       subtitle="Flagship engineering systems demonstrating distributed architectures, AI applications and intelligent automation built for production."
        />

        <div className="grid gap-8">

          {systems.map((system) => (
            <SystemCard
              key={system.title}
              title={system.title}
              tagline={system.tagline}
              challenge={system.challenge}
              solution={system.solution}
              flow={system.flow}
              engineeringDecisions={system.engineeringDecisions}
              highlights={system.highlights}
              impact={system.impact}
              stack={system.stack}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
