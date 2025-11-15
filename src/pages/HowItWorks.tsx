import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, FileCheck, DollarSign } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Application",
    description: "Complete our simple online application form with your basic information and funding requirements. The process takes just a few minutes.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "Document Verification",
    description: "Our team reviews your application and may request additional documents. We ensure a thorough yet efficient verification process.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Approval Decision",
    description: "Receive a same-day decision on your application. Our advanced systems enable quick assessment while maintaining accuracy.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Receive Funds",
    description: "Once approved, sign your contract electronically and receive your funds quickly. We prioritize speed without compromising security.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8 text-center">
              How It <span className="text-accent">Works</span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Our streamlined process makes getting funded simple and fast. From application to funding, we've designed every step with your convenience in mind.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start p-8 border-2 border-border bg-card hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <step.icon className="w-16 h-16 text-accent" />
                    <div className="text-6xl font-mono font-bold text-accent/20">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border-2 border-accent bg-accent/5">
              <h3 className="text-2xl font-mono font-bold mb-4">Why Our Process Works</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Fast processing with same-day decisions on most applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Transparent communication throughout the entire process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Secure digital document handling and e-signature capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span>Dedicated support team available to answer your questions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
