import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative container mx-auto px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <img 
              src={aboutHero} 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-accent">Trust Lending Funds</span>
            </h1>
            
            <div className="space-y-8 text-lg text-muted-foreground">
              <p>
                Trust Lending Funds is a leading financial services provider dedicated to empowering individuals and businesses with tailored lending solutions. Since our inception, we've been committed to making financing accessible, transparent, and efficient - with trust at the core of everything we do.
              </p>
              
              <p>
                Our mission is to unlock financial success through trusted expertise and personalized services. We understand that every financial journey is unique, which is why we offer customized solutions that adapt to your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Target className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide swift, flexible, and reliable financing solutions that help our clients achieve their goals with confidence.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Users className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Team</h3>
                <p className="text-muted-foreground">
                  A dedicated group of financial experts committed to delivering personalized support and strategic guidance every step of the way.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <Award className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Trust, transparency, and excellence drive everything we do. We believe in building lasting relationships with our clients.
                </p>
              </div>

              <div className="border-2 border-border bg-card/80 backdrop-blur-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <TrendingUp className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Our Growth</h3>
                <p className="text-muted-foreground">
                  With thousands of successful funding solutions delivered, we continue to expand our services and impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Meet Our Expert Team
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your financial goals with personalized guidance and expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team1} 
                    alt="Robert Chen - Chief Executive Officer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Chen</h3>
                  <p className="text-accent font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm">
                    With over 20 years in financial services, Robert leads our vision of making lending accessible and transparent for everyone.
                  </p>
                </div>
              </div>

              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team2} 
                    alt="David Martinez - Head of Lending"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Martinez</h3>
                  <p className="text-accent font-medium mb-3">Head of Lending</p>
                  <p className="text-muted-foreground text-sm">
                    David specializes in crafting customized loan solutions, ensuring each client receives the best possible financing options.
                  </p>
                </div>
              </div>

              <div className="border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={team3} 
                    alt="Sarah Williams - Client Relations Director"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
                  <p className="text-accent font-medium mb-3">Client Relations Director</p>
                  <p className="text-muted-foreground text-sm">
                    Sarah ensures every client receives exceptional service and support throughout their entire lending journey with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
