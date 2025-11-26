import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, Puzzle, Sparkles } from "lucide-react";
import { mockProfiles } from "@/data/mockProfiles";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [matchPreference, setMatchPreference] = useState<"similar" | "opposite" | null>(null);
  const { toast } = useToast();

  const handlePreferenceChange = (value: string) => {
    const preference = value as "similar" | "opposite";
    setMatchPreference(preference);
    
    // Basculer le mode sombre/clair selon la préférence
    if (preference === "opposite") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    toast({
      title: preference === "similar" ? "Mode Similarité activé" : "Mode Opposés activé",
      description: preference === "similar" 
        ? "Vous verrez des profils qui vous ressemblent" 
        : "Vous verrez des profils complémentaires",
    });
  };

  const filteredProfiles = matchPreference 
    ? mockProfiles.filter(p => p.matchType === matchPreference)
    : mockProfiles;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Puzzle className="h-20 w-20 text-accent animate-float-3d" />
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
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Sparkles className="mr-2 h-5 w-5" />
                Commencer le test
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
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
            <Card className="shadow-[var(--shadow-3d)]">
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <Heart className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-4xl font-display">Test de Personnalité</CardTitle>
                <CardDescription className="text-lg">
                  Choisissez votre approche pour découvrir des profils compatibles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={matchPreference || ""} onValueChange={handlePreferenceChange}>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-6 rounded-lg border-2 border-border hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="similar" id="similar" className="mt-1" />
                      <Label htmlFor="similar" className="cursor-pointer flex-1 space-y-2">
                        <div className="font-display font-semibold text-xl">Qui se ressemble s'assemble</div>
                        <p className="text-muted-foreground leading-relaxed">
                          Trouvez des personnes qui partagent vos passions culturelles. 
                          Les mêmes genres musicaux, les mêmes auteurs préférés, les mêmes films cultes.
                          Une connexion basée sur l'homophilie et les affinités communes.
                        </p>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-4 p-6 rounded-lg border-2 border-border hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="opposite" id="opposite" className="mt-1" />
                      <Label htmlFor="opposite" className="cursor-pointer flex-1 space-y-2">
                        <div className="font-display font-semibold text-xl">Les opposés s'attirent</div>
                        <p className="text-muted-foreground leading-relaxed">
                          Découvrez des profils complémentaires qui élargiront vos horizons.
                          Des goûts différents qui se complètent, une richesse dans la diversité.
                          Une approche basée sur l'hétérophilie et la sérendipité.
                        </p>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {matchPreference && (
                  <div className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Votre préférence a été enregistrée. Découvrez les profils correspondants ci-dessous.
                    </p>
                    <Button 
                      onClick={() => {
                        document.getElementById('profiles-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Voir les profils compatibles
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
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
              {matchPreference 
                ? "Profils sélectionnés selon vos préférences"
                : "Complétez le test ci-dessus pour voir les profils compatibles"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun profil ne correspond à vos critères actuels.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
