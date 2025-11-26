import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Affinity");
    const body = encodeURIComponent("Bonjour,\n\nJe vous contacte au sujet de...");
    window.location.href = `mailto:sgr.claire@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-accent" />
              <span className="font-display font-bold text-lg">Affinity</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecter les âmes à travers les goûts culturels.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <a
              href="#"
              onClick={handleEmailClick}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              sgr.claire@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Mentions légales</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>© {currentYear} Affinity. Tous droits réservés.</p>
              <p className="text-xs">
                Ce site est un projet académique réalisé dans le cadre du cours de Web Documentaire.
              </p>
              <p className="text-xs">
                Licence: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CC BY-NC-SA 4.0</a>
              </p>
              <p className="text-xs italic">
                Directeur de publication: Claire SGR<br />
                Hébergement: Lovable Platform
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>Données personnelles protégées selon le RGPD. Cookies essentiels uniquement.</p>
          <p className="mt-2 italic">
            🎓 Un clin d'œil spécial au Professeur Gérald Kembellec pour son enseignement inspirant ! 
            {/* Easter egg: cherchez les références cachées dans le glossaire... */}
          </p>
        </div>
      </div>
    </footer>
  );
};
