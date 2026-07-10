import {
  BrainCircuit,
  Cloud,
  Database,
  Server,
} from "lucide-react";

const skills = [
  {
    title: "Backend Engineering",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
       "PostgreSQL",
  "System Design",
      "Microservices",
      "JWT",
      "OAuth2",
      "Git",
    ],
  },

  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: [
      "LLM Applications",
      "LangGraph",
      "AI Agents",
      "Prompt Engineering",
      "LLM Evaluation",
      "OCR",
      "LlamaParse",
      "Fine-tuning",
    ],
  },

  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS Lambda",
      "Amazon SQS",
      "AWS EC2",
      "AWS S3",
      "New Relic",
      "Event-driven Architecture",
    ],
  },

  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
];

export default skills;