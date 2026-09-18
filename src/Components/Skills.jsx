import React from "react";

const Interests = () => {
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

  const services = [
    "Database Intern at Indian Army",
    "Time Duration : June 2023 - August 2023",

    "Contributed to a high-level database management project focused on military vehicle part tracking.",

    "Maintained and optimized a specialized SQL database for components of legacy military vehicles, including models from the 1950s.",

    "Facilitated prototype creation and testing by managing data for obsolete components (e.g., carburetor fans) and their replacements.",

    "Assisted in tracking parts developed from natural materials (like carbon and nickel), helping modernize older military systems.",

    "Collaborated with a team supporting 100+ army personnel, ensuring precise and timely data for component hardening and tensile strength tests.",

    "Played a key role in the successful production and integration of updated vehicle components, contributing to equipment readiness and longevity.",
  ];

  return (
    <div className="relative pt-[30vw] md:pt-[15vw] min-h-screen bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee] text-gray-800">
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />

      <div className="relative z-10 mx-auto w-[85vw] md:w-[60vw] flex flex-col gap-[8vw] md:gap-[4vw]">
        {/* Skills Box */}
        <div className="w-full px-[5vw]  py-[6vw] md:px-[3vw] md:py-[2.5vw] bg-white/80 rounded-3xl shadow-xl border border-white/30 backdrop-blur-md">
          <h2 className="text-[6vw] md:text-4xl font-bold text-center mb-6 text-gray-900">
            💡 Technical Skills
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[4vw] md:text-base text-gray-700">
            {skills.map((skill, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-semibold text-gray-900">
                  {skill.category} :
                </span>{" "}
                {skill.items}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Box */}
        <div className="w-full px-[5vw] mb-20 py-[6vw] md:px-[3vw] md:py-[2.5vw] bg-white/80 rounded-3xl shadow-xl border border-white/30 backdrop-blur-md">
          <h2 className="text-[6vw] md:text-4xl font-bold text-center mb-6 text-gray-900">
            🛠️ Internship
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[4vw] md:text-base text-gray-700">
                    {services.map((service, index) => (
            <li key={index} className="leading-relaxed">
                {service.includes("Indian Army") ? (
                <span dangerouslySetInnerHTML={{ __html: service.replace("Indian Army", "<strong>Indian Army</strong>") }} />
                ) : (
                service
                )}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interests;
