import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Book, Film, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  age: number;
  image: string;
  bio: string;
  musicTaste: string[];
  books: string[];
  movies: string[];
  matchType: "similar" | "opposite";
}

export const ProfileCard = ({ name, age, image, bio, musicTaste, books, movies, matchType }: ProfileCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-3d-hover)] hover:-translate-y-2 bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden">
          <img 
            src={image} 
            alt={`Photo de ${name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-display font-bold">{name}, {age}</h3>
              <Badge variant={matchType === "similar" ? "secondary" : "default"} className="bg-accent/90 text-accent-foreground">
                {matchType === "similar" ? "Similaire" : "Opposé"}
              </Badge>
            </div>
            <p className="text-sm text-gray-200 line-clamp-2">{bio}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Music className="h-4 w-4 text-accent" />
              <span className="font-display font-medium">Musique:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {musicTaste.slice(0, 3).map((genre, i) => (
                <Badge key={i} variant="outline" className="text-xs">{genre}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Book className="h-4 w-4 text-accent" />
              <span className="font-display font-medium">Livres:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {books.slice(0, 2).map((book, i) => (
                <Badge key={i} variant="outline" className="text-xs">{book}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Film className="h-4 w-4 text-accent" />
              <span className="font-display font-medium">Films:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {movies.slice(0, 2).map((movie, i) => (
                <Badge key={i} variant="outline" className="text-xs">{movie}</Badge>
              ))}
            </div>
          </div>

          <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Heart className="h-4 w-4 mr-2" />
            Voir le profil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
