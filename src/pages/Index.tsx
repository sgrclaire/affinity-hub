import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { PersonalityTest } from "@/components/PersonalityTest";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { mockProfiles } from "@/data/mockProfiles";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";
const Index = () => {
  const [matchPreference, setMatchPreference] = useState<"similar" | "opposite" | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const {
    toast
  } = useToast();
  const handleTestComplete = (result: "similar" | "opposite") => {
    setMatchPreference(result);

    // Basculer le mode sombre/clair selon le résultat
    if (result === "opposite") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    toast({
      title: result === "similar" ? "Mode Similarité activé" : "Mode Opposés activé",
      description: result === "similar" ? "Vous verrez des profils qui vous ressemblent" : "Vous verrez des profils complémentaires"
    });

    // Scroll vers les profils après un délai
    setTimeout(() => {
      document.getElementById('profiles-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 2500);
  };
  const filteredProfiles = matchPreference ? mockProfiles.filter(p => p.matchType === matchPreference) : mockProfiles;
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroBackground})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
              Trouvez votre
              <span className="block text-accent mt-2">Affinité Parfaite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connectez-vous à travers vos goûts musicaux, littéraires et cinématographiques.
              Que vous cherchiez <q>qui se ressemble s'assemble</q> ou <q>les opposés s'attirent</q>,
              Affinity trouve votre connexion idéale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground hover-scale" onClick={() => {
              setTestStarted(true);
              document.getElementById('personality-test')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <Sparkles className="mr-2 h-5 w-5" />
                Commencer le test
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => {
              document.getElementById('personality-test')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Découvrir Affinity
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Test de Personnalité */}
      <section className="py-20 bg-card" id="personality-test">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {!testStarted ? <div className="text-center space-y-8 py-16 animate-fade-in">
                <div className="flex justify-center">
                  <Heart className="h-20 w-20 text-accent animate-pulse" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Découvrez Votre Type de Connexion
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Répondez à 7 questions pour comprendre si vous recherchez des personnes qui vous ressemblent 
                  ou des profils complémentaires qui enrichiront votre univers.
                </p>
                <Button size="lg" onClick={() => setTestStarted(true)} className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground hover-scale">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Commencer le test maintenant
                </Button>
              </div> : <PersonalityTest onComplete={handleTestComplete} />}
          </div>
        </div>
      </section>

      {/* Section Profils */}
      <section className="py-20" id="profiles-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              {matchPreference === "similar" && "Profils qui vous ressemblent"}
              {matchPreference === "opposite" && "Profils complémentaires"}
              {!matchPreference && "Découvrez nos membres"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {matchPreference ? "Profils sélectionnés selon vos préférences" : "Complétez le test ci-dessus pour voir les profils compatibles"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map(profile => <ProfileCard key={profile.id} {...profile} />)}
          </div>

          {filteredProfiles.length === 0 && <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun profil ne correspond à vos critères actuels.
              </p>
            </div>}
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;