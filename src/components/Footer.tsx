import { Link } from "react-router-dom";
import quickcashLogo from "@/assets/quickcash-logo-new.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={quickcashLogo} alt="QuickCashLoans - Fast Loans, Built on Trust" className="h-16 w-auto object-contain flex-shrink-0" />
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
