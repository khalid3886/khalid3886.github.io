import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ImpactCard from "../components/common/ImpactCard";

const impacts = [
  {
    value: "10,000+",
    label: "Users Served",
  },
  {
    value: "100,000+",
    label: "Travel Bookings",
  },
  {
    value: "AI",
    label: "Production Applications",
  },
  {
    value: "AWS",
    label: "Distributed Systems",
  },
];

export default function Impact() {
  return (
    <section className="py-28">
      <Container>

        <SectionHeading
          title="Engineering Impact"
          subtitle="Building production systems that solve real-world problems at scale."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {impacts.map((item) => (
            <ImpactCard
              key={item.label}
              {...item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}