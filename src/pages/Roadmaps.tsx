import { ChevronDown, Code, Shield, Brain, Database, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roadmaps = [
  {
    id: "web",
    title: "Web Development",
    icon: Code,
    color: "from-primary to-cyan-400",
    description: "Become a full-stack web developer from scratch",
    roadmapUrl: "https://roadmap.sh/frontend",
    steps: [
      { title: "HTML & CSS Fundamentals", duration: "2-3 weeks", topics: ["HTML5 semantics", "CSS layouts", "Responsive design", "Flexbox & Grid"] },
      { title: "JavaScript Essentials", duration: "4-6 weeks", topics: ["Variables & functions", "DOM manipulation", "ES6+ features", "Async programming"] },
      { title: "Frontend Framework (React)", duration: "4-6 weeks", topics: ["Components & props", "State management", "Hooks", "Routing"] },
      { title: "Backend Development", duration: "6-8 weeks", topics: ["Node.js basics", "Express.js", "REST APIs", "Database integration"] },
      { title: "Database & Deployment", duration: "3-4 weeks", topics: ["SQL/NoSQL", "MongoDB/PostgreSQL", "CI/CD", "Cloud deployment"] },
    ],
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: Shield,
    color: "from-secondary to-pink-400",
    description: "Master cybersecurity and ethical hacking",
    roadmapUrl: "https://roadmap.sh/cyber-security",
    steps: [
      { title: "Networking Fundamentals", duration: "3-4 weeks", topics: ["TCP/IP", "OSI model", "Network protocols", "Subnetting"] },
      { title: "Linux & System Administration", duration: "4-5 weeks", topics: ["Linux commands", "File systems", "User management", "Scripting"] },
      { title: "Security Concepts", duration: "3-4 weeks", topics: ["CIA triad", "Cryptography", "Authentication", "Security policies"] },
      { title: "Ethical Hacking", duration: "6-8 weeks", topics: ["Reconnaissance", "Vulnerability scanning", "Exploitation", "Penetration testing"] },
      { title: "Advanced Security", duration: "4-6 weeks", topics: ["Incident response", "Forensics", "Malware analysis", "Security auditing"] },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-orange-500 to-amber-400",
    description: "Build intelligent systems with AI/ML",
    roadmapUrl: "https://roadmap.sh/ai-data-scientist",
    steps: [
      { title: "Python Programming", duration: "3-4 weeks", topics: ["Python basics", "Data structures", "Libraries (NumPy, Pandas)", "Jupyter notebooks"] },
      { title: "Mathematics for ML", duration: "4-5 weeks", topics: ["Linear algebra", "Calculus", "Probability", "Statistics"] },
      { title: "Machine Learning Basics", duration: "6-8 weeks", topics: ["Supervised learning", "Unsupervised learning", "Model evaluation", "Feature engineering"] },
      { title: "Deep Learning", duration: "6-8 weeks", topics: ["Neural networks", "CNN", "RNN/LSTM", "Transfer learning"] },
      { title: "Specialization", duration: "4-6 weeks", topics: ["NLP", "Computer vision", "Reinforcement learning", "MLOps"] },
    ],
  },
  {
    id: "data",
    title: "Data Science",
    icon: Database,
    color: "from-blue-500 to-indigo-400",
    description: "Analyze data and derive insights",
    roadmapUrl: "https://roadmap.sh/ai-data-scientist",
    steps: [
      { title: "Python & Tools Setup", duration: "2-3 weeks", topics: ["Python basics", "Anaconda", "Jupyter", "Git basics"] },
      { title: "Data Analysis", duration: "4-5 weeks", topics: ["Pandas", "NumPy", "Data cleaning", "Exploratory analysis"] },
      { title: "Data Visualization", duration: "3-4 weeks", topics: ["Matplotlib", "Seaborn", "Plotly", "Dashboard creation"] },
      { title: "Statistics & Probability", duration: "4-5 weeks", topics: ["Descriptive stats", "Inferential stats", "Hypothesis testing", "A/B testing"] },
      { title: "Machine Learning for DS", duration: "6-8 weeks", topics: ["Regression", "Classification", "Clustering", "Model deployment"] },
    ],
  },
];

const RoadmapCard = ({ roadmap }: { roadmap: typeof roadmaps[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRoadmapLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(roadmap.roadmapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center gap-4 hover:bg-muted/50 transition-colors"
      >
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${roadmap.color} flex items-center justify-center shrink-0`}>
          <roadmap.icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-1">{roadmap.title}</h3>
          <p className="text-muted-foreground text-sm">{roadmap.description}</p>
        </div>
        <button
          onClick={handleRoadmapLink}
          className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-1.5 mr-2"
        >
          <ExternalLink className="w-4 h-4" />
          roadmap.sh
        </button>
        <ChevronDown className={cn("w-6 h-6 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {/* Steps */}
      <div className={cn("overflow-hidden transition-all duration-500", isOpen ? "max-h-[2000px]" : "max-h-0")}>
        <div className="px-6 pb-6">
          <div className="relative pl-8 border-l-2 border-border">
            {roadmap.steps.map((step, index) => (
              <div key={index} className="relative pb-8 last:pb-0">
                {/* Timeline dot */}
                <div className={cn(
                  "absolute -left-[25px] w-4 h-4 rounded-full border-4 border-background",
                  `bg-gradient-to-br ${roadmap.color}`
                )} />

                <div className="ml-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">
                      <span className="text-muted-foreground mr-2">Step {index + 1}:</span>
                      {step.title}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.topics.map((topic, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmaps = () => {
  return (
    <div className="min-h-screen">
    
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Learning <span className="gradient-text">Roadmaps</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-1">
              Structured learning paths to guide you from beginner to professional. Click any roadmap to explore the steps.
            </p>
          </div>

          {/* Roadmaps */}
          <div className="space-y-4">
            {roadmaps.map((roadmap, index) => (
              <div key={roadmap.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <RoadmapCard roadmap={roadmap} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmaps;
