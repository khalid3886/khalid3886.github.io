export interface FlowStep {
  title: string;
  description: string;
}

export interface EngineeringSystem {
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

const systems: EngineeringSystem[] = [
  {
    title: "AI Travel Intelligence Platform",

    tagline:
      "Unified fragmented travel information into intelligent itineraries using AI-powered document intelligence.",

    challenge:
      "Travel information was scattered across Gmail, Google Calendar, booking confirmations, passport images and manual searches. Users lacked a single source of truth for their travel plans.",

    solution:
      "Designed an AI-powered ingestion pipeline that continuously collected, classified and transformed unstructured travel information into a unified structured itinerary using LLMs, OCR and distributed event-driven workflows.",

  flow: [
  {
    title: "Gmail Watch",
    description:
      "Receives incremental mailbox updates using Gmail History IDs.",
  },
  {
    title: "AWS Lambda",
    description:
      "Processes events and orchestrates downstream AI workflows.",
  },
  {
    title: "LLM + OCR",
    description:
      "Extracts structured travel information from unstructured documents.",
  },
  {
    title: "Amazon SQS",
    description:
      "Queues normalized events for asynchronous processing.",
  },
  {
    title: "PostgreSQL",
    description:
      "Stores unified itineraries and structured booking information.",
  },
  {
    title: "Variflight",
    description:
      "Subscribes to real-time flight status updates.",
  },
  {
    title: "WhatsApp",
    description:
      "Delivers live travel notifications to users.",
  },
],

    highlights: [
      "Gmail Watch & History IDs",
      "Google Calendar integration",
      "Passport & ticket parsing",
      "Prompt engineering",
      "LLM evaluation pipeline",
      "Flight tracking & notifications",
      "Travel timeline generation",
    ],

    stack: [
      "Node.js",
      "TypeScript",
      "LangGraph",
      "AWS Lambda",
      "Amazon SQS",
      "PostgreSQL",
      "MongoDB",
    ],

    engineeringDecisions: [
  "Adopted an event-driven architecture using AWS Lambda and Amazon SQS to decouple ingestion from downstream persistence.",
  "Stored transactional travel data in PostgreSQL while using MongoDB for AI artifacts, parsed documents and debugging.",
  "Introduced prompt evaluation workflows before deploying extraction prompts to production.",
  "Normalized travel data into a unified itinerary model to support downstream automation."
],

impact: [
  "Served 10,000+ users",
  "Supported 100,000+ travel bookings",
  "Unified fragmented travel information",
  "Reduced manual itinerary management"
]
  },
{
  title: "AI Agent Orchestration Platform",

  tagline:
    "Supervisor-based multi-agent platform enabling conversational travel assistance through specialized AI agents, secure database access and human-in-the-loop workflows.",

  challenge:
    "Travel assistance spans independent workflows including flight booking, travel history, airline check-in and lounge eligibility. A single AI agent became difficult to scale, lacked domain specialization and required secure access to production data.",

  solution:
    "Designed a supervisor-based LangGraph architecture where specialized AI agents handled independent workflows while a supervisor coordinated routing, tool execution and interrupt-driven interactions whenever user input was required.",

flow: [
  {
    title: "User Query",
    description:
      "Natural language request from the traveller.",
  },
  {
    title: "Supervisor Agent",
    description:
      "Routes the request to the appropriate specialized agent.",
  },
  {
    title: "Specialized Agent",
    description:
      "Booking, History, Check-in or Lounge agent executes the task.",
  },
  {
    title: "Interrupt Widgets",
    description:
      "Collects flight selection, passenger details or payment inputs.",
  },
  {
    title: "Tool Execution",
    description:
      "Invokes Google Flights, PostgreSQL Views and other backend services.",
  },
  {
    title: "Final Response",
    description:
      "Returns a conversational response to the user.",
  },
],

  highlights: [
    "Supervisor-based LangGraph architecture",
    "Human-in-the-loop interrupt workflows",
    "Google Flights integration",
    "Secure PostgreSQL Views for AI",
    "Conversational flight booking",
    "Travel history analytics",
    "Airline check-in status",
    "Airport lounge eligibility",
  ],

  stack: [
    "LangGraph",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Google Flights API",
    "LLMs",
    "Prompt Engineering",
    "Interrupt Widgets",
  ],

  engineeringDecisions: [
  "Implemented supervisor-based LangGraph orchestration instead of a monolithic AI agent.",
  "Created PostgreSQL Views so AI agents could safely query business data without direct table access.",
  "Used interrupt-driven workflows for flight selection, passenger collection and payment confirmation.",
  "Specialized agents by domain to improve maintainability and response quality."
],

impact: [
  "Four production AI agents",
  "Human-in-the-loop booking",
  "Secure conversational database access",
  "Production travel assistant"
]
},
  {
    title: "Autonomous Airline Check-in Engine",

    tagline:
      "Fully automated airline web check-in through browser automation and distributed scheduling.",

    challenge:
      "Passengers frequently missed airline check-in windows, reducing seat selection options and requiring manual effort.",

    solution:
      "Built an autonomous scheduling platform capable of initiating airline web check-in, monitoring emails for boarding passes and automatically delivering them through WhatsApp.",

flow: [
  {
    title: "Scheduler",
    description:
      "Triggers automatic check-in at the correct time.",
  },
  {
    title: "Browser Automation",
    description:
      "Navigates airline portals and performs check-in.",
  },
  {
    title: "Email Monitor",
    description:
      "Detects boarding pass delivery.",
  },
  {
    title: "Boarding Pass",
    description:
      "Downloads and validates the boarding pass.",
  },
  {
    title: "WhatsApp",
    description:
      "Delivers boarding pass to the traveller.",
  },
],

    highlights: [
      "Distributed scheduling",
      "Browser automation",
      "Passenger document intelligence",
      "Email monitoring",
      "Boarding-pass retrieval",
      "WhatsApp delivery",
    ],

    stack: [
      "Node.js",
      "Browser Use",
      "AWS Lambda",
      "TypeScript",
    ],
    engineeringDecisions: [
  "Used distributed scheduling instead of long-running background workers.",
  "Designed resilient retry workflows for airline-specific failures.",
  "Separated browser automation from notification delivery.",
  "Automated boarding-pass retrieval."
],

impact: [
  "Autonomous airline check-in",
  "Boarding-pass delivery",
  "Reduced manual effort",
  "Reliable scheduling"
]
  },

  {
    title: "Enterprise AI Operations Platform",

    tagline:
      "AI-powered workflow automation platform for travel agencies and enterprise operations.",

    challenge:
      "Travel agencies manually processed quotations, bookings, customer emails and subscription workflows, resulting in repetitive operational effort.",

solution:
  "Designed AI-driven enterprise workflows that classified travel emails, extracted structured booking and hotel information, automated customer operations and powered an agency platform with SEO website generation, subscription management and post-booking revenue services.",

flow: [
  {
    title: "Travel Email",
    description:
      "Receives quotations, bookings and customer emails.",
  },
  {
    title: "LLM Classification",
    description:
      "Identifies the email type and required workflow.",
  },
  {
    title: "Booking & Hotel Extraction",
    description:
      "Extracts structured booking and hotel information.",
  },
  {
    title: "Agency Dashboard",
    description:
      "Updates the travel agent portal in real time.",
  },
  {
    title: "Post-booking Services",
    description:
      "Offers eSIMs, lounge access and travel insurance.",
  },
],

highlights: [
  "Enterprise email classification",
  "Hotel intelligence platform",
  "Booking extraction pipelines",
  "SEO website generation",
  "Subscription management",
  "Agency dashboard",
  "Post-booking revenue services",
  "Customer operations",
],

    stack: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "LLMs",
      "Razorpay",
      "Dodo Payments",
    ],

    engineeringDecisions: [
  "Separated operational workflows into modular AI pipelines.",
  "Integrated hotel parsing into the enterprise workflow instead of treating it as an isolated service.",
  "Added post-booking ancillary services to generate additional revenue opportunities for travel agencies.",
  "Built SEO-enabled white-label websites to improve customer acquisition for agencies."
],

impact: [
  "Enterprise agency portal",
  "White-label websites",
  "Hotel intelligence platform",
  "Ancillary revenue services"
]
  },

{
  title: "Hotel Intelligence Platform",

  tagline:
    "AI-powered hotel document intelligence platform that transforms unstructured booking confirmations into normalized enterprise travel data.",

  challenge:
    "Hotel booking confirmations varied across providers and contained highly unstructured information including hotel details, rooms, guests, amenities, meal plans, cancellation policies and check-in instructions. Manual processing was slow, error-prone and difficult to scale.",

  solution:
    "Designed a modular hotel intelligence pipeline that combined OCR, LLMs and metadata enrichment to extract structured hotel reservations. The system normalized bookings into relational entities and enriched them with hotel information, amenities and policies for enterprise travel operations.",

  flow: [
    {
      title: "Hotel Email",
      description:
        "Receives hotel booking confirmations from Gmail and enterprise travel workflows.",
    },
    {
      title: "OCR + LLM Parsing",
      description:
        "Extracts structured hotel, room, guest and reservation information from highly unstructured booking documents.",
    },
    {
      title: "Metadata Enrichment",
      description:
        "Enriches bookings with hotel amenities, policies and location information using external services.",
    },
    {
      title: "Structured Database",
      description:
        "Stores normalized hotel, room, guest and booking entities in PostgreSQL.",
    },
    {
      title: "Agency Portal",
      description:
        "Makes structured hotel bookings available inside the enterprise travel dashboard.",
    },
  ],

  engineeringDecisions: [
    "Split extraction into specialized prompts instead of a single monolithic prompt to improve accuracy and maintainability.",
    "Designed a normalized PostgreSQL schema for hotels, rooms, guests and bookings.",
    "Used metadata enrichment to augment parsed bookings with amenities, policies and hotel information.",
    "Evaluated multiple OCR and document parsing models to continuously improve extraction quality.",
  ],

  highlights: [
    "Hotel booking extraction",
    "Room & guest intelligence",
    "Amenities parsing",
    "Check-in & cancellation policies",
    "Google Places enrichment",
    "Multi-model LLM evaluation",
    "Normalized hotel database",
  ],

  impact: [
    "Automated hotel booking processing",
    "Reduced manual data entry",
    "Enterprise-ready hotel intelligence",
    "Structured reservation data",
  ],

  stack: [
    "Node.js",
    "TypeScript",
    "LLMs",
    "OCR",
    "PostgreSQL",
    "MongoDB",
    "Google Places API",
  ],
},
];

export default systems;