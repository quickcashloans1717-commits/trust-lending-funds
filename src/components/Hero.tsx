import { Check, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBackground} 
          alt="Financial growth visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-accent mb-8 font-bold">
          Funding solutions
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Achieve your goals,<br />
          access fast financing
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Unlock financial success with our trusted expertise and personalized services.
        </p>

        <Link to="/get-started">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-base px-8 py-6 h-auto group">
            Get started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
