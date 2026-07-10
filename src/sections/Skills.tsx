import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import SkillCard from "../components/common/SkillCard";

import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <Container>

        <SectionHeading
        title="Engineering Stack"
    subtitle="Technologies I use to design scalable backend systems, AI-powered applications and distributed architectures."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {skills.map((category) => (
            <SkillCard
               key={category.title}
    title={category.title}
    icon={<category.icon size={22} />}
    skills={category.skills}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}