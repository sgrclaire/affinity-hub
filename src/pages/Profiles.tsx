import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { mockProfiles } from "@/data/mockProfiles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profiles = () => {
  const similarProfiles = mockProfiles.filter(p => p.matchType === "similar");
  const oppositeProfiles = mockProfiles.filter(p => p.matchType === "opposite");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Découvrez nos Membres
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez les profils de notre communauté et trouvez votre connexion idéale
            </p>
          </header>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="similar">Similaires</TabsTrigger>
              <TabsTrigger value="opposite">Opposés</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockProfiles.map((profile) => (
                  <ProfileCard key={profile.id} {...profile} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="similar" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">Profils Similaires</h2>
                <p className="text-muted-foreground">
                  Ces membres partagent des goûts culturels proches des vôtres
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProfiles.map((profile) => (
                  <ProfileCard key={profile.id} {...profile} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="opposite" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">Profils Opposés</h2>
                <p className="text-muted-foreground">
                  Ces membres ont des goûts complémentaires qui pourraient enrichir votre univers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {oppositeProfiles.map((profile) => (
                  <ProfileCard key={profile.id} {...profile} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profiles;
