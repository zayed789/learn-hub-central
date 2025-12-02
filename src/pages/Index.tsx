import { ArrowRight, BookOpen, Map, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: BookOpen,
    title: "Curated Courses",
    description: "Hand-picked courses from top platforms like Coursera, Udemy, and YouTube.",
  },
  {
    icon: Map,
    title: "Learning Roadmaps",
    description: "Structured paths to guide your learning journey in any field.",
  },
  {
    icon: Zap,
    title: "Save Time",
    description: "Stop searching. Start learning. All resources in one place.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Resources vetted and recommended by learners like you.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Your Learning Journey Starts Here</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up stagger-1">
              <span className="text-foreground">Master Any Skill with</span>
              <br />
              <span className="gradient-text">Organized Learning</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
              Stop jumping between platforms. We centralize the best courses and create clear roadmaps so you can focus on what matters — learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/roadmaps">
                <Button variant="glow" size="lg">
                  View Roadmaps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">LearnHub</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed every feature to enhance your learning experience and eliminate the chaos of scattered resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join thousands of learners who have transformed their skills with our curated resources.
              </p>
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
