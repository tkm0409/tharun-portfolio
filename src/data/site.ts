import type { ImageMetadata } from 'astro';
import type { CastName } from '../lib/cast';

import techGuru from '../assets/awards/tech-guru.jpg';
import genaiDesignathon2025 from '../assets/awards/genai-designathon-2025.jpg';
import rockstar2024 from '../assets/awards/rockstar-2024.jpg';
import knowledgeNinja from '../assets/awards/knowledge-ninja.png';
import maverick2024 from '../assets/awards/maverick-designathon-2024.jpeg';
import coderush2024 from '../assets/awards/coderush-2024.jpg';
import designathon2023 from '../assets/awards/designathon-2023.jpg';
import algomaniac2024 from '../assets/awards/algomaniac-2024.jpg';

import mCertificate from '../assets/moments/certificate-of-achievement.jpeg';
import mChampions from '../assets/moments/champions.jpeg';
import mCoderush from '../assets/moments/coderush-2024.jpeg';
import mDesignathon from '../assets/moments/designathon.jpeg';
import mGenai2024 from '../assets/moments/genai-designathon-2024.jpeg';
import mLeadership from '../assets/moments/with-hexaware-leadership.jpeg';
import mWinningDay from '../assets/moments/winning-day.jpeg';

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Tharun Kumar Maddala',
  shortName: 'Tharun',
  initials: 'TK',
  role: 'AI Engineer Lead',
  company: 'Accenture',
  location: 'Hyderabad, India',
  availability: 'Open to remote & hybrid roles',
  email: 'm.tharunkumar0409@gmail.com',
  phoneDisplay: '+91 79951 95537',
  whatsapp: 'https://wa.me/917995195537',
  linkedin: 'https://www.linkedin.com/in/tharunkumar0409',
  github: 'https://github.com/tkm0409',
  site: 'https://tharunkumaronline.vercel.app',
  languages: ['English', 'Telugu', 'Hindi', 'Tamil'],
  description:
    'AI Engineer Lead at Accenture. Builds production agentic AI systems: multi-agent orchestration, grounded LLMs and guardrails wired into Salesforce, .NET and SAP.',
  story: [
    "I've spent four-plus years inside enterprise software, and since early 2023 almost all of it has been Generative AI. I take agentic systems from proof of concept to pilot to full rollout, for user bases in the lakhs.",
    'My favourite problems sit where LLMs meet messy enterprise data: detecting intent, grounding answers in live context, and putting guardrails and human review in the right places so agents act accurately and safely.',
    "Before GenAI I shipped RPA bots and full-stack apps in .NET, Angular and React, so I care about the boring parts too: integration, UAT and the thing still working on Monday.",
  ],
};

export const stats = [
  { value: '4', suffix: '+', label: 'Years in enterprise' },
  { value: '80', suffix: '%', label: 'Fewer support tickets' },
  { value: '97', suffix: '%', label: 'Requirement accuracy' },
  { value: '100K', suffix: '+', label: 'Users reached' },
];

/* ------------------------------------------------------------------ */
/* Work                                                               */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  sub: string;
  kind: 'production' | 'hackathon';
  meta: string;
  tags: string[];
  award?: string;
  metrics?: string[];
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    title: 'Agentic Copilot for Salesforce',
    sub: 'In-CRM agent that resolves requests in one chat',
    kind: 'production',
    meta: 'Enterprise',
    tags: ['Copilot Studio', 'Salesforce Apex/LWC', 'Azure OpenAI'],
    metrics: ['−80% tickets', '97% accuracy'],
    problem:
      'Users raised ServiceNow tickets for routine Salesforce requests: around 500 a month, peaking near 1,000, each waiting on the support team.',
    approach:
      'A Copilot Studio orchestrator with child agents, tools and flows. Apex and LWC pass live context (permissions, current record, recent activity) and enforce field-level security while the agent detects intent and gathers inputs conversationally.',
    outcome:
      'Piloted with a controlled group, then rolled out to a user base in the lakhs. Support tickets dropped by up to 80%, with 97% of requirements captured correctly and no support-team involvement.',
  },
  {
    title: 'Natural-Language-to-SQL',
    sub: 'Conversational data access inside a .NET app',
    kind: 'production',
    meta: 'Enterprise',
    tags: ['Azure OpenAI', '.NET', 'SQL', 'Schema-aware RAG'],
    problem: 'Non-technical team members needed data from the application database but could not write SQL.',
    approach:
      'Schema-aware retrieval grounds the model in the relevant tables before it writes SQL. Guardrails allow only read-only SELECT queries, block harmful actions and validate every query before it runs.',
    outcome: 'Teams query data in plain English and get results back as tables, graphs or charts, safely.',
  },
  {
    title: 'LLM-Assisted ABAP Engineering',
    sub: 'Cursor agents that write specs and code to house standards',
    kind: 'production',
    meta: 'Enterprise',
    tags: ['Cursor rules & skills', 'Sub-agents', 'SAP/ABAP'],
    problem: 'Turning ABAP code into specifications, and requirement documents into ABAP code, was slow manual work.',
    approach:
      'Cursor workflows built from custom rules, skills and sub-agents. ABAP files become functional and technical specs in Markdown, and DOCX or PDF requirements become ABAP code, with naming standards encoded in the agent config.',
    outcome: 'Specs and code that follow organisational conventions, reviewed and validated by the ABAP team before use.',
  },
  {
    title: 'GenAI Discovery Platform',
    sub: 'Multi-agent RAG over enterprise knowledge',
    kind: 'production',
    meta: 'Enterprise',
    tags: ['LangGraph', 'OpenAI Agents SDK', 'RAG', 'LangSmith'],
    problem: 'Teams spent hours digging through scattered enterprise documents to answer routine questions.',
    approach:
      'Multi-agent system on LangGraph and the OpenAI Agents SDK, with context engineering, semantic re-ranking over a vector store and LangSmith observability.',
    outcome: 'Natural-language Q&A over the knowledge base, with tracing good enough to run in production.',
  },
  {
    title: 'Enterprise Process Automation',
    sub: 'RPA across Salesforce, ServiceNow, DocuSign & Jira',
    kind: 'production',
    meta: 'Enterprise',
    tags: ['Automation Anywhere', 'Salesforce', 'ServiceNow', 'DocuSign'],
    metrics: ['−40% manual effort'],
    problem: 'Critical cross-system Salesforce processes were run by hand, which was slow and error-prone.',
    approach:
      'Architected and deployed bots across multiple tracks, integrating external applications, backed by solution design documents, flow diagrams and UAT.',
    outcome: 'Manual processing time cut by around 40%, with better data accuracy for thousands of employees.',
  },
  {
    title: 'AI Panel Slot Allocation',
    sub: 'Maverick GenAI Designathon',
    kind: 'hackathon',
    meta: '2024',
    award: 'Winner',
    tags: ['GenAI', 'Scheduling'],
    problem: 'Matching interview panels to candidate slots was a manual juggling act.',
    approach: 'A GenAI assistant that reads availability and constraints, then proposes conflict-free allocations.',
    outcome: 'Won the Maverick GenAI Designathon 2024 at Hexaware.',
  },
  {
    title: 'Smart Recruitment App',
    sub: 'GenAI Designathon',
    kind: 'hackathon',
    meta: '2025',
    award: 'Runner-up',
    tags: ['LLMs', 'HR tech'],
    problem: 'Recruiters screened large applicant pools by hand.',
    approach: 'An AI-assisted recruitment flow that screens and ranks candidates against the role.',
    outcome: 'Runner-up at the GenAI Designathon 2025.',
  },
  {
    title: 'Performance Management System',
    sub: 'Hexaware Designathon',
    kind: 'hackathon',
    meta: '2023',
    award: 'Runner-up',
    tags: ['UX', 'Product design'],
    problem: 'The internal performance review experience was hard to navigate.',
    approach: 'Designed a functional, task-first UI for the full review cycle.',
    outcome: 'Runner-up at the Hexaware Designathon 2023.',
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities                                                       */
/* ------------------------------------------------------------------ */

export const capabilities = [
  {
    title: 'Agentic & GenAI',
    note: 'Core',
    items: [
      'Multi-agent orchestration', 'ReAct · Reflection · Routing', 'Intent detection', 'Tool & function calling', 'MCP',
      'LangGraph', 'LangChain', 'OpenAI Agents SDK', 'Copilot Studio', 'Azure OpenAI', 'AWS Bedrock', 'Vertex AI',
      'CrewAI', 'AutoGen', 'Prompt & context engineering',
    ],
  },
  {
    title: 'Retrieval, evals & guardrails',
    note: 'Core',
    items: [
      'RAG & agentic RAG', 'Schema-aware retrieval', 'Semantic search', 'Chunking & reranking', 'Embeddings',
      'ChromaDB', 'FAISS', 'Weaviate', 'Pinecone', 'Eval harnesses', 'LangSmith', 'RAGAS',
      'LLM guardrails', 'Human-in-the-loop review', 'Field-level security context',
    ],
  },
  {
    title: 'Engineering',
    note: 'Build',
    items: ['Python', 'FastAPI', 'C#', '.NET Core', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'React', 'Angular', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Platforms & cloud',
    note: 'Ship',
    items: [
      'Salesforce (Apex, LWC)', 'SAP / ABAP', 'ServiceNow', 'DocuSign', 'Jira', 'Automation Anywhere', 'Power Automate',
      'Azure', 'AWS', 'Google Cloud', 'Docker', 'PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Cursor', 'Git',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: 'Accenture',
    role: 'AI Engineer Lead',
    period: 'Oct 2026 — Present',
    location: 'Hyderabad',
    current: true,
    points: [
      "Lead AI engineering for a global tax-technology client's marketing organisation, designing and delivering GenAI and agentic solutions for its marketing operations.",
      'Guide the engineering team on solution design, delivery standards and technical reviews, turning client requirements into production-ready AI workflows.',
    ],
    tags: ['GenAI', 'Agentic workflows', 'Technical leadership'],
  },
  {
    company: 'Hexaware Technologies',
    role: 'Applied AI Engineer',
    period: 'Jun 2022 — Sep 2026',
    location: 'Chennai',
    points: [
      'Took GenAI and agentic systems from proof of concept through pilot to full rollout across user bases in the lakhs.',
      'Designed multi-agent orchestration with intent detection and tool execution, using ReAct, Reflection and Routing patterns to automate work previously handled by support teams.',
      'Engineered grounding and guardrail layers (schema-aware context, scoped permissions, query validation, human review) so agents act safely on live enterprise data.',
      'Built Python and FastAPI services integrated into Salesforce (Apex, LWC), .NET and SAP/ABAP; led client requirement discussions and technical reviews.',
      'Earlier: enterprise RPA on Automation Anywhere and full-stack apps in .NET Core, Angular and React, before moving to GenAI in early 2023.',
    ],
    tags: ['LangGraph', 'FastAPI', 'Azure OpenAI', 'Salesforce', 'RPA'],
  },
  {
    company: 'Wipro',
    role: 'Project Intern',
    period: 'Mar 2022 — Jun 2022',
    location: '',
    points: ['Built test automation with Java, Selenium and TestNG, and helped tighten CI/CD pipelines for more reliable releases.'],
    tags: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
  },
];

export const education = {
  degree: 'B.Tech, Electronics & Communication Engineering',
  school: 'Narayana Engineering College, Gudur',
  period: '2018 — 2022',
  score: 'CGPA 7.58 / 10',
};

/* ------------------------------------------------------------------ */
/* Recognition                                                        */
/* ------------------------------------------------------------------ */

export type Award = { title: string; when: string; tag: string; text: string; image: ImageMetadata; featured?: boolean };

export const awards: Award[] = [
  { title: 'Maverick GenAI Designathon', when: 'Winner · 2024', tag: 'Hackathon', featured: true, image: maverick2024,
    text: "Won with an AI-powered panel slot allocation application." },
  { title: 'Tech Guru Award', when: 'Q3 2025', tag: 'Excellence', featured: true, image: techGuru,
    text: 'Recognised at Hexaware for technical expertise and innovative contributions.' },
  { title: 'GenAI Designathon', when: 'Runner-up · 2025', tag: 'Hackathon', image: genaiDesignathon2025,
    text: 'Smart Recruitment Application, applying AI to HR workflows.' },
  { title: 'Rockstar of the Month', when: 'Dec 2024', tag: 'Performance', image: rockstar2024,
    text: 'For consistent excellence in AI-driven automation solutions.' },
  { title: 'CodeRush NLP Sprint', when: '3rd place · 2024', tag: 'Coding', image: coderush2024,
    text: 'Two-day coding sprint focused on Natural Language Processing.' },
  { title: 'Algomaniac', when: 'Top performer · 2024', tag: 'Coding', image: algomaniac2024,
    text: 'High-intensity algorithmic contest.' },
  { title: 'Knowledge Ninja & Learning Award', when: 'Q4 2023', tag: 'Learning', image: knowledgeNinja,
    text: 'Hexaware Ambassador, recognised for commitment to continuous learning.' },
  { title: 'Designathon', when: 'Runner-up · 2023', tag: 'Design', image: designathon2023,
    text: 'Functional UI for the Performance Management System.' },
];

// Order matters: it maps onto the bento slots in Recognition.astro (a–g).
export const moments: { caption: string; image: ImageMetadata }[] = [
  { caption: 'Winning day', image: mWinningDay },
  { caption: 'Champions', image: mChampions },
  { caption: 'CodeRush 2024', image: mCoderush },
  { caption: 'With Hexaware leadership', image: mLeadership },
  { caption: 'Designathon', image: mDesignathon },
  { caption: 'GenAI Designathon 2024', image: mGenai2024 },
  { caption: 'Certificate of achievement', image: mCertificate },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                     */
/* ------------------------------------------------------------------ */

const ms = 'https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/';
const credly = 'https://www.credly.com/badges/';

export const certifications = [
  {
    issuer: 'Amazon Web Services',
    short: 'AWS',
    items: [
      { name: 'Solutions Architect — Professional', level: 'Professional', url: `${credly}a7475891-79e5-42b3-be08-fbbe28d39ae6/public_url` },
      { name: 'Developer — Associate', level: 'Associate', url: `${credly}ee2154ae-3090-494f-b12f-de5b5ac0cd68/public_url` },
      { name: 'Cloud Practitioner', level: 'Foundational', url: `${credly}ac15e2db-c930-4d43-9dc7-5f4fcdee90a5/public_url` },
    ],
  },
  {
    issuer: 'Microsoft',
    short: 'MS',
    items: [
      { name: 'Azure Solutions Architect Expert', level: 'Expert', url: `${ms}24CDDDE7BCFB11AF?sharingId=3875DA5B9B8F1D57` },
      { name: 'Azure Developer Associate', level: 'Associate', url: `${ms}AAB62E5A2F80BF7B?sharingId=3875DA5B9B8F1D57` },
      { name: 'Azure Administrator Associate', level: 'Associate', url: `${ms}4606B138783C1D?sharingId=3875DA5B9B8F1D57` },
      { name: 'Dynamics 365 Customer Service Functional Consultant', level: 'Associate', url: `${ms}9898E82F857E45D2?sharingId=3875DA5B9B8F1D57` },
      { name: 'Azure AI Fundamentals (AI-900)', level: 'Fundamentals', url: `${ms}E11E64325DB82C24?sharingId=3875DA5B9B8F1D57` },
      { name: 'Azure Data Fundamentals', level: 'Fundamentals', url: `${ms}FF1F01E0E05A42F?sharingId=3875DA5B9B8F1D57` },
      { name: 'Azure Fundamentals', level: 'Fundamentals', url: `${ms}D292CBF8FF3DE708?sharingId=3875DA5B9B8F1D57` },
      { name: 'Microsoft 365 Fundamentals', level: 'Fundamentals', url: `${ms}7A2E40E6796F9E4B?sharingId=3875DA5B9B8F1D57` },
    ],
  },
  {
    issuer: 'Automation Anywhere',
    short: 'AA',
    items: [
      { name: 'Certified Advanced Automation Professional', level: 'Advanced', url: 'https://certificates.automationanywhere.com/047ac704-0a32-4e0a-a106-b6d3fd016b2f' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Navigation: each section has a host from the cast                  */
/* ------------------------------------------------------------------ */

export const sections: { id: string; label: string; host: CastName }[] = [
  { id: 'work', label: 'Work', host: 'bolt' },
  { id: 'skills', label: 'Skills', host: 'pix' },
  { id: 'experience', label: 'Experience', host: 'bean' },
  { id: 'recognition', label: 'Recognition', host: 'nova' },
  { id: 'certifications', label: 'Certifications', host: 'dot' },
  { id: 'contact', label: 'Contact', host: 'ping' },
];
