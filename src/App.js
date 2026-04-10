const portfolioKnowledge = {
  profile: {
    name: "Navya Krishna",
    tagline: "AI Engineer, Software Developer, and Full-Stack Builder",
    summary:
      "Navya builds AI-powered systems, scalable backend platforms, cloud-native services, and polished full-stack products."
  },

  hobbies: {
    tags: [
      "hobby",
      "hobbies",
      "interests",
      "outside work",
      "outside of work",
      "fun",
      "personal",
      "travel",
      "travelling",
      "traveling",
      "coffee",
      "cafe",
      "cafes",
      "café",
      "explore",
      "exploring"
    ],
    summary:
      "Outside of work, Navya enjoys travelling, exploring coffee places and cozy cafés, discovering new places, and taking small creative breaks that help her reset and stay inspired."
  },

  education: [
    {
      level: "masters",
      school: "California State University - Sacramento",
      degree: "Master of Science in Computer Science",
      start: "Aug 2022",
      end: "Dec 2024",
      topics: ["masters", "master", "ms", "m s", "graduate", "degree", "education", "study", "studied", "college", "university"]
    },
    {
      level: "bachelors",
      school: "Amrita School of Engineering",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "Aug 2017",
      end: "May 2021",
      topics: ["bachelor", "btech", "undergraduate", "ug", "education", "degree"]
    }
  ],

  skills: {
    languages: ["Python", "Java", "TypeScript", "JavaScript", "C++", "React", "Node.js", "FastAPI", "Flask"],
    ai: ["PyTorch", "TensorFlow", "Transformers", "LLMs", "LangChain", "RAG", "FAISS", "Pinecone", "OpenAI APIs", "Claude APIs"],
    infra: ["Docker", "Kubernetes", "AWS", "Azure", "PostgreSQL", "MongoDB", "Redis", "Git", "CI/CD"]
  },

  experience: [
    {
      role: "AI Researcher",
      company: "California State University - Sacramento",
      dates: "Apr 2025 – Present",
      tools: ["Python", "PyTorch", "CUDA", "Docker"],
      tags: ["ai", "research", "llm", "benchmarking", "evaluation", "multimodal", "gpu", "pytorch", "cuda", "researcher", "sac state"],
      work: [
        "built a production-grade LLM evaluation platform",
        "designed workflows for 100K+ inference runs",
        "engineered GPU-accelerated benchmarking infrastructure",
        "improved reproducibility and validation speed for AI systems"
      ]
    },
    {
      role: "Software Engineer",
      company: "California Department of Fish and Wildlife",
      dates: "May 2024 – Apr 2025",
      tools: ["Java", "Spring", "Docker", "Azure", "CI/CD"],
      tags: ["cdfw", "fish and wildlife", "government", "compliance", "case management", "java", "spring", "azure", "api", "backend"],
      work: [
        "modernized a statewide compliance and case-management platform",
        "improved backend APIs, authentication, and service reliability",
        "built automated integration and CI/CD workflows",
        "helped reduce deployment failures and improve availability"
      ]
    },
    {
      role: "Software Engineer",
      company: "Auradine Inc",
      dates: "May 2023 – Aug 2023",
      tools: ["Python", "React", "AWS", "Docker", "Kubernetes", "MongoDB"],
      tags: ["auradine", "gpu", "telemetry", "aws", "kubernetes", "anomaly detection", "rest api", "monitoring"],
      work: [
        "built backend services for a real-time GPU telemetry platform",
        "designed REST APIs and data ingestion pipelines",
        "developed AI-based anomaly detection workflows in Python",
        "supported scalable deployment with AWS, Docker, and Kubernetes"
      ]
    },
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      dates: "May 2021 – Jun 2022",
      tools: ["Node.js", "React", "SQL", "AWS", "REST APIs"],
      tags: ["tcs", "tata", "enterprise", "asset management", "inventory", "node", "react", "sql", "api"],
      work: [
        "engineered a full-stack enterprise asset management platform",
        "built secure REST APIs and authenticated workflows",
        "improved backend performance with better data access and caching",
        "supported reliable cloud-based deployment workflows"
      ]
    },
    {
      role: "Software Engineer",
      company: "Dharshini Diya Infotec (OPC) Private Limited",
      dates: "Jan 2020 – Mar 2021",
      tools: ["React", "Java", "Spring Boot", "Git", "Testing"],
      tags: ["dharshini", "financial", "analytics", "splunk", "spring boot", "logs", "java", "react"],
      work: [
        "developed a real-time financial analytics platform",
        "built backend services with Spring Boot",
        "worked on log and anomaly-focused processing workflows",
        "improved testing quality and system integration"
      ]
    }
  ],

  projects: [
    {
      name: "Fake News Detection",
      link: "https://github.com/NavyaBatchu0712/Fake-News-Detection",
      tags: ["fake news", "bert", "attention", "misinformation"],
      summary:
        "an NLP and deep learning project using attention-based approaches for misinformation classification."
    },
    {
      name: "Emotion Recognition",
      link: "https://github.com/NavyaBatchu0712/Neural-Network-Based-Approach-for-Emotion-Recognition",
      tags: ["emotion", "emotion recognition", "vgg16", "resnet", "cnn"],
      summary:
        "a deep learning project for emotion classification using CNNs, VGG16, and ResNet-based experimentation."
    },
    {
      name: "Calendar Scheduler",
      link: "https://github.com/NavyaBatchu0712/Calender-Scheduler",
      tags: ["calendar", "scheduler", "scheduling", "academic"],
      summary:
        "an academic scheduling and reminders system designed to automate calendar workflows and coordination."
    }
  ]
};

const projects = [
  {
    title: "Calendar Scheduler",
    description: "Academic scheduling and reminders system for automating planning workflows.",
    tools: ["Java", "Node.js", "MySQL"],
    github: "https://github.com/NavyaBatchu0712/Calender-Scheduler"
  },
  {
    title: "Fake News Detection",
    description: "NLP and deep learning system for misinformation classification using attention-based approaches.",
    tools: ["BERT", "Attention", "Python"],
    github: "https://github.com/NavyaBatchu0712/Fake-News-Detection"
  },
  {
    title: "Emotion Recognition",
    description: "Deep learning project for emotion classification using CNNs, VGG16, and ResNet.",
    tools: ["TensorFlow", "VGG16", "ResNet"],
    github: "https://github.com/NavyaBatchu0712/Neural-Network-Based-Approach-for-Emotion-Recognition"
  }
];

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tool-pills">
        ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
      </div>
      <div class="project-actions">
        <a href="${project.github}" target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

const chatWindow = document.getElementById("chatWindow");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const promptButtons = document.querySelectorAll(".prompt-btn");

function addChatMessage(text, role) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${role}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(query, terms) {
  return terms.some(term => query.includes(term));
}

function scoreByTerms(query, terms) {
  let score = 0;
  for (const term of terms) {
    if (query.includes(term)) {
      score += Math.max(2, term.split(" ").length + 1);
    }
  }
  return score;
}

function bestMatch(query, items, key = "tags") {
  let best = null;
  let bestScore = 0;

  for (const item of items) {
    const score = scoreByTerms(query, item[key] || []);
    if (score > bestScore) {
      best = item;
      bestScore = score;
    }
  }

  return bestScore > 0 ? best : null;
}

function listToSentence(items) {
  if (!items || !items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function buildEducationReply(query) {
  const master = portfolioKnowledge.education.find(e => e.level === "masters");
  const bachelor = portfolioKnowledge.education.find(e => e.level === "bachelors");

  if (query.includes("master") || query.includes("ms") || query.includes("graduate")) {
    return `Navya completed her ${master.degree} at ${master.school} from ${master.start} to ${master.end}.`;
  }

  if (query.includes("bachelor") || query.includes("btech") || query.includes("undergraduate")) {
    return `She earned her ${bachelor.degree} from ${bachelor.school} from ${bachelor.start} to ${bachelor.end}.`;
  }

  return `Navya completed her ${master.degree} at ${master.school} from ${master.start} to ${master.end}, and before that earned her ${bachelor.degree} from ${bachelor.school} from ${bachelor.start} to ${bachelor.end}.`;
}

function buildSkillsReply(query) {
  if (includesAny(query, ["ai", "llm", "machine learning", "rag", "agents", "transformers"])) {
    return `Her AI stack includes ${listToSentence(portfolioKnowledge.skills.ai)}.`;
  }

  if (includesAny(query, ["cloud", "infra", "deployment", "devops", "docker", "kubernetes", "aws", "azure"])) {
    return `Her cloud and infrastructure stack includes ${listToSentence(portfolioKnowledge.skills.infra)}.`;
  }

  if (includesAny(query, ["language", "frontend", "backend", "code", "programming"])) {
    return `Her core languages and frameworks include ${listToSentence(portfolioKnowledge.skills.languages)}.`;
  }

  return `Navya works across AI, backend, cloud, and frontend engineering. Her stack includes ${listToSentence(portfolioKnowledge.skills.languages)}, plus ${listToSentence(portfolioKnowledge.skills.ai)}, and infrastructure tools like ${listToSentence(portfolioKnowledge.skills.infra)}.`;
}

function buildExperienceReply(job, query) {
  if (!job) {
    const roles = portfolioKnowledge.experience.map(item => `${item.role} at ${item.company}`);
    return `Navya’s experience includes ${listToSentence(roles)}.`;
  }

  if (includesAny(query, ["tool", "tools", "stack", "used", "tech"])) {
    return `At ${job.company}, she worked as a ${job.role} and used tools including ${listToSentence(job.tools)}.`;
  }

  return `At ${job.company}, Navya worked as a ${job.role} (${job.dates}) where she ${job.work.join(", ")}.`;
}

function buildProjectReply(project, query) {
  if (!project) {
    const names = portfolioKnowledge.projects.map(p => p.name);
    return `Some of her key projects include ${listToSentence(names)}.`;
  }

  if (query.includes("link") || query.includes("github") || query.includes("repo")) {
    return `${project.name} is available here: ${project.link}`;
  }

  return `${project.name} is ${project.summary} You can explore it here: ${project.link}`;
}

function buildHobbiesReply(query) {
  if (includesAny(query, ["coffee", "cafe", "cafes", "café"])) {
    return "Outside of work, Navya enjoys exploring coffee places and cozy cafés. She likes finding new spots, relaxing environments, and small creative breaks that help her recharge.";
  }

  if (includesAny(query, ["travel", "travelling", "traveling", "places", "explore", "exploring"])) {
    return "Outside of engineering, Navya enjoys travelling and exploring new places. She likes discovering different environments, food spots, and experiences that bring fresh perspective and inspiration.";
  }

  return portfolioKnowledge.hobbies.summary;
}

function classifyIntent(query) {
  if (includesAny(query, ["degree", "education", "masters", "master", "ms", "bachelor", "btech", "study", "studied", "college", "university"])) {
    return "education";
  }

  if (includesAny(query, ["skills", "tools", "tech stack", "stack", "technology", "technologies", "frameworks", "languages"])) {
    return "skills";
  }

  if (includesAny(query, ["project", "projects", "github", "repo", "repository", "fake news", "emotion recognition", "scheduler", "calendar"])) {
    return "projects";
  }

  if (includesAny(query, ["experience", "work", "worked", "role", "job", "company", "career", "auradine", "tcs", "fish and wildlife", "cdfw", "dharshini", "researcher"])) {
    return "experience";
  }

  if (includesAny(query, ["contact", "email", "reach", "hire", "connect"])) {
    return "contact";
  }

  if (includesAny(query, ["hobby", "hobbies", "interests", "outside work", "outside of work", "fun", "personal", "travel", "travelling", "traveling", "coffee", "cafe", "cafes", "café", "explore", "exploring"])) {
    return "hobbies";
  }

  if (includesAny(query, ["who are you", "about", "introduce", "introduction", "summary"])) {
    return "summary";
  }

  return "general";
}

function generateReply(rawQuery) {
  const query = normalize(rawQuery);

  const matchedJob = bestMatch(query, portfolioKnowledge.experience);
  const matchedProject = bestMatch(query, portfolioKnowledge.projects);
  const intent = classifyIntent(query);

  switch (intent) {
    case "education":
      return buildEducationReply(query);

    case "skills":
      return buildSkillsReply(query);

    case "projects":
      return buildProjectReply(matchedProject, query);

    case "experience":
      return buildExperienceReply(matchedJob, query);

    case "contact":
      return "You can reach Navya at batchunavyakrishna4@gmail.com, and explore her work on GitHub at https://github.com/NavyaBatchu0712.";

    case "hobbies":
      return buildHobbiesReply(query);

    case "summary":
      return `${portfolioKnowledge.profile.name} is an ${portfolioKnowledge.profile.tagline}. ${portfolioKnowledge.profile.summary}`;

    default:
      if (matchedJob) return buildExperienceReply(matchedJob, query);
      if (matchedProject) return buildProjectReply(matchedProject, query);

      if (includesAny(query, ["current", "currently", "present"])) {
        const current = portfolioKnowledge.experience[0];
        return `Navya is currently working as an ${current.role} at ${current.company}, where she focuses on LLM evaluation and large-scale benchmarking systems.`;
      }

      return "I can help with Navya’s background, experience, projects, skills, education, hobbies, and contact details. Try asking about her current role, a company she worked at, one of her projects, her tech stack, or what she enjoys outside work.";
  }
}

if (chatForm && chatInput && chatWindow) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    addChatMessage(query, "user");
    chatInput.value = "";

    setTimeout(() => {
      addChatMessage(generateReply(query), "bot");
    }, 260);
  });
}

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.prompt || button.textContent.trim();
    addChatMessage(prompt, "user");

    setTimeout(() => {
      addChatMessage(generateReply(prompt), "bot");
    }, 220);
  });
});
