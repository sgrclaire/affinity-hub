export const mockProfiles = [
  {
    id: 1,
    name: "Sophie",
    age: 28,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
    bio: "Passionnée de jazz et de littérature contemporaine. Je cherche quelqu'un qui comprend que Coltrane et Modiano se complètent parfaitement.",
    musicTaste: ["Jazz", "Soul", "Bossa Nova"],
    books: ["Modiano", "Duras", "Proust"],
    movies: ["Nouvelle Vague", "Cinéma d'auteur", "Documentaires"],
    matchType: "similar" as const
  },
  {
    id: 2,
    name: "Thomas",
    age: 31,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    bio: "Développeur le jour, DJ electro la nuit. Fan de science-fiction et de Philip K. Dick. Les opposés m'attirent.",
    musicTaste: ["Techno", "House", "Electronic"],
    books: ["Philip K. Dick", "Isaac Asimov", "Neal Stephenson"],
    movies: ["Blade Runner", "Matrix", "Inception"],
    matchType: "opposite" as const
  },
  {
    id: 3,
    name: "Léa",
    age: 26,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop",
    bio: "Architecte amoureuse des formes et des rythmes. Entre Bauhaus et hip-hop, je construis mon univers.",
    musicTaste: ["Hip-hop", "R&B", "Rap français"],
    books: ["Toni Morrison", "Zadie Smith", "Chimamanda Ngozi Adichie"],
    movies: ["Moonlight", "La Haine", "Atlanta"],
    matchType: "similar" as const
  },
  {
    id: 4,
    name: "Marc",
    age: 33,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
    bio: "Professeur d'histoire et guitariste amateur. De Led Zeppelin aux chroniques médiévales, je voyage dans le temps.",
    musicTaste: ["Rock classique", "Blues", "Folk"],
    books: ["Umberto Eco", "Ken Follett", "Histoire médiévale"],
    movies: ["Kubrick", "Coppola", "Films historiques"],
    matchType: "opposite" as const
  },
  {
    id: 5,
    name: "Camille",
    age: 29,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop",
    bio: "Journaliste culturelle, cinéphile assumée. Je crois aux rencontres qui nous changent, comme un bon film.",
    musicTaste: ["Indie", "Alternative", "Chanson française"],
    books: ["Sagan", "Nothomb", "Darrieussecq"],
    movies: ["Truffaut", "Varda", "Gondry"],
    matchType: "similar" as const
  },
  {
    id: 6,
    name: "Alexandre",
    age: 30,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop",
    bio: "Chef cuisinier et mélomane éclectique. De la pop à la gastronomie, je mixe les saveurs et les sons.",
    musicTaste: ["Pop", "Electro-pop", "Indie pop"],
    books: ["Bourdain", "Ruhlman", "Pollan"],
    movies: ["Wes Anderson", "Edgar Wright", "Taika Waititi"],
    matchType: "opposite" as const
  }
];
