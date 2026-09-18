import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "AI & ML",
      items:
        "Large Language Models, RAG Pipeline Design, Vector Databases, Semantic Search, Prompt Engineering, LLM Evaluation, Hybrid Retrieval, Hallucination Mitigation, Agentic Workflows",
    },
    {
      category: "Frameworks & Tools",
      items:
        "LangChain, LangGraph, Hugging Face Transformers, FastAPI, Flask, Celery, Redis, Docker, Ollama, LiteLLM, Pydantic, Node.js, React.js",
    },
    {
      category: "Databases",
      items: "PostgreSQL, MongoDB, Qdrant, ChromaDB, FAISS",
    },
    {
      category: "Cloud & APIs",
      items:
        "AWS (EC2), Azure OpenAI, OpenAI API, LiteLLM Gateway, REST APIs, Docker Compose",
    },
    {
      category: "Languages",
      items: "Python, C++, SQL",
    },
  ];

  const experience = [
    {
      role: "AI Engineer",
      company: "Karma AI",
      period: "April 2026 – Present",
      paragraphs: [
        "I work on document intelligence for government agencies, where a confidently wrong answer is far more expensive than no answer at all. I built a pipeline that reads unstructured case files and returns structured records — witnesses, evidence, timelines, accused — and a hybrid retrieval layer over 40,000+ court judgments that narrows by statutory section before ranking semantically, which cut irrelevant results by roughly 97% against plain similarity search.",
        "Most of the interesting work has been in making output trustworthy rather than merely fluent. Anchor-span extraction, output whitelisting, and replacing model calls with deterministic parsing wherever a rule would do pushed grounding to about 91%. Around that I built the evaluation infrastructure — corruption testing that catches injected defects without crying wolf, an independent LLM judge, and a golden regression suite — plus a provider-agnostic gateway, so changing model providers is a config edit rather than a re-indexing project.",
      ],
    },
    {
      role: "Software Developer",
      company: "FirstLease",
      period: "Aug 2025 – April 2026",
      paragraphs: [
        "I built the company’s first internal RAG system: natural-language Q&A over long client requirement documents, backed by an ingestion pipeline that handled PDFs, spreadsheets, and scanned pages across 500+ internal files. Role-based access and conversation history took it from a prototype to something three teams — sales, operations, and compliance — relied on day to day, cutting document review time by an estimated 60%.",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#e0d4cd] pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="w-full px-5 md:px-20">
        <h1 className="text-3xl md:text-5xl text-black font-bold tracking-tight pb-5 md:pb-6 border-b border-zinc-500">
          Skills & Experience
        </h1>
      </div>

      <div className="w-full px-5 md:px-20 mt-8 md:mt-10 flex flex-col gap-6 md:gap-8">
        {/* Skills */}
        <div className="w-full rounded-3xl bg-[#004D43] text-[#e0d4cd] px-6 py-7 md:px-10 md:py-9">
          <h2 className="text-xl md:text-3xl font-semibold mb-5">
            Technical Skills
          </h2>
          <ul className="space-y-3 text-sm md:text-base">
            {skills.map((skill, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-semibold text-white">
                  {skill.category}
                </span>
                <span className="text-[#e0d4cd]/60"> — </span>
                {skill.items}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="w-full rounded-3xl bg-[#012924] text-[#e0d4cd] px-6 py-7 md:px-10 md:py-9">
          <h2 className="text-xl md:text-3xl font-semibold mb-5">Experience</h2>

          <div className="space-y-7 md:space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-base md:text-xl font-semibold text-white">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-xs md:text-sm text-[#e0d4cd]/60 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <div className="space-y-3 text-sm md:text-base">
                  {job.paragraphs.map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
