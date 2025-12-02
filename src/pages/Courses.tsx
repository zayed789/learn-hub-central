import { ExternalLink, Clock, Star, BookOpen, Code, Shield, Brain, Database, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "All Courses", icon: BookOpen },
  { id: "web", label: "Web Development", icon: Code },
  { id: "cyber", label: "Cybersecurity", icon: Shield },
  { id: "ai", label: "AI & ML", icon: Brain },
  { id: "data", label: "Data Science", icon: Database },
  { id: "design", label: "UI/UX Design", icon: Palette },
];

const courses = [
  {
    id: 1,
    title: "The Complete Web Developer Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects.",
    platform: "Udemy",
    category: "web",
    duration: "65 hours",
    rating: 4.8,
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    color: "from-primary to-cyan-400",
  },
  {
    id: 2,
    title: "Google Cybersecurity Professional Certificate",
    description: "Get started in cybersecurity with a certificate from Google. No experience needed.",
    platform: "Coursera",
    category: "cyber",
    duration: "6 months",
    rating: 4.9,
    url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    color: "from-secondary to-pink-400",
  },
  {
    id: 3,
    title: "Machine Learning Specialization",
    description: "Master machine learning from Andrew Ng. Build ML models with Python and TensorFlow.",
    platform: "Coursera",
    category: "ai",
    duration: "3 months",
    rating: 4.9,
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 4,
    title: "CS50: Introduction to Computer Science",
    description: "Harvard's legendary intro to CS. Learn programming fundamentals and algorithmic thinking.",
    platform: "YouTube",
    category: "web",
    duration: "12 weeks",
    rating: 5.0,
    url: "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 5,
    title: "IBM Data Science Professional Certificate",
    description: "Develop skills in data science and machine learning. Get hands-on experience.",
    platform: "Coursera",
    category: "data",
    duration: "5 months",
    rating: 4.6,
    url: "https://www.coursera.org/professional-certificates/ibm-data-science",
    color: "from-blue-500 to-indigo-400",
  },
  {
    id: 6,
    title: "Google UX Design Professional Certificate",
    description: "Learn the foundations of UX design. Create high-fidelity designs and prototypes.",
    platform: "Coursera",
    category: "design",
    duration: "6 months",
    rating: 4.8,
    url: "https://www.coursera.org/professional-certificates/google-ux-design",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: 7,
    title: "React - The Complete Guide",
    description: "Dive into React.js, Redux, Hooks, and build amazing applications.",
    platform: "Udemy",
    category: "web",
    duration: "48 hours",
    rating: 4.7,
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    color: "from-cyan-500 to-blue-400",
  },
  {
    id: 8,
    title: "Ethical Hacking - Full Course",
    description: "Learn ethical hacking from scratch. Network security, penetration testing, and more.",
    platform: "YouTube",
    category: "cyber",
    duration: "15 hours",
    rating: 4.8,
    url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
    color: "from-red-500 to-orange-400",
  },
  {
    id: 9,
    title: "Deep Learning Specialization",
    description: "Master deep learning, neural networks, and AI applications with Andrew Ng.",
    platform: "Coursera",
    category: "ai",
    duration: "5 months",
    rating: 4.9,
    url: "https://www.coursera.org/specializations/deep-learning",
    color: "from-violet-500 to-purple-400",
  },
];

const Courses = () => {
  const handleCourseClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Explore <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-1">
              Hand-picked courses from top platforms. Click any course to start learning on the original platform.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up stagger-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300 text-sm font-medium"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />

                <div className="p-6">
                  {/* Platform Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {course.platform}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="glow"
                    className="w-full"
                    onClick={() => handleCourseClick(course.url)}
                  >
                    Start Learning
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
