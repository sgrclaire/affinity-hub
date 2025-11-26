import { Link, useLocation } from "react-router-dom";
import { Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-puzzle-heart.png";
export const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img alt="Affinity Logo" className="h-10 w-auto transition-transform group-hover:scale-105" src="/lovable-uploads/28a18293-ccd7-4c7d-b119-62feb77e0253.png" />
            <span className="text-2xl font-display font-bold">Affinity</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-display transition-colors ${isActive("/") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
              Accueil
            </Link>
            <Link to="/profiles" className={`text-sm font-display transition-colors ${isActive("/profiles") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
              Profils
            </Link>
            <Link to="/about" className={`text-sm font-display transition-colors ${isActive("/about") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
              À propos
            </Link>
          </div>

          <Link to="/my-profile">
            <Button variant="outline" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Mon Profil</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>;
};