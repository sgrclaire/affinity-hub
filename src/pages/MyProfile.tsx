import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Music, Book, Film, Settings, Heart } from "lucide-react";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold mb-4">Mon Profil</h1>
            <p className="text-xl text-muted-foreground">
              Gérez vos informations et vos préférences culturelles
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne gauche - Photo et stats */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-[var(--shadow-3d)]">
                <CardContent className="pt-6">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" 
                      alt="Photo de profil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button className="w-full mb-4" variant="outline">
                    Changer la photo
                  </Button>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Profils consultés</span>
                      <Badge variant="secondary">42</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Matchs potentiels</span>
                      <Badge variant="secondary">18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Connexions établies</span>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">7</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Préférences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Type de matching</Label>
                    <Badge variant="outline" className="text-sm">
                      Qui se ressemble s'assemble
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Modifier les préférences
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Colonne droite - Informations */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" defaultValue="Alexandra" />
                    </div>
                    <div>
                      <Label htmlFor="age">Âge</Label>
                      <Input id="age" type="number" placeholder="Votre âge" defaultValue="27" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Biographie</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Parlez-nous de vous..."
                      rows={4}
                      defaultValue="Passionnée d'art, de musique et de belles rencontres. Entre expositions et concerts, je cherche des connexions authentiques."
                    />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sauvegarder les modifications
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-accent" />
                    Goûts musicaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Connectez votre compte Spotify pour importer automatiquement vos goûts musicaux
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Jazz</Badge>
                    <Badge variant="outline">Soul</Badge>
                    <Badge variant="outline">Electronic</Badge>
                    <Badge variant="outline">Indie</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Music className="h-4 w-4 mr-2" />
                    Connecter Spotify
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-accent" />
                    Lectures préférées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Connectez votre compte Babelio pour synchroniser votre bibliothèque
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Littérature contemporaine</Badge>
                    <Badge variant="outline">Essais</Badge>
                    <Badge variant="outline">Poésie</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Book className="h-4 w-4 mr-2" />
                    Connecter Babelio
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Film className="h-5 w-5 text-accent" />
                    Cinéma et séries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Connectez votre compte Letterboxd pour partager vos films favoris
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cinéma d'auteur</Badge>
                    <Badge variant="outline">Science-fiction</Badge>
                    <Badge variant="outline">Documentaires</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Film className="h-4 w-4 mr-2" />
                    Connecter Letterboxd
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyProfile;
