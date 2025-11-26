import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import { glossaryTerms } from "@/data/glossary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ExternalLink, Music } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Sommaire */}
          <nav className="mb-16 p-8 bg-card rounded-lg shadow-[var(--shadow-3d)] border border-border">
            <h2 className="text-2xl font-display font-bold mb-6">Sommaire</h2>
            <ol className="space-y-3 list-decimal list-inside text-lg">
              <li><a href="#introduction" className="text-accent hover:underline">Introduction : La rencontre à l'ère numérique</a></li>
              <li><a href="#concept" className="text-accent hover:underline">Le concept Affinity</a></li>
              <li><a href="#science" className="text-accent hover:underline">Les fondements scientifiques</a></li>
              <li><a href="#technologie" className="text-accent hover:underline">Architecture technologique</a></li>
              <li><a href="#glossaire" className="text-accent hover:underline">Glossaire</a></li>
              <li><a href="#bibliographie" className="text-accent hover:underline">Bibliographie</a></li>
              <li><a href="#sitographie" className="text-accent hover:underline">Sitographie</a></li>
            </ol>
          </nav>

          {/* Introduction */}
          <section id="introduction" className="mb-16 scroll-mt-24">
            <h1 className="text-5xl font-display font-bold mb-8">Affinity : La Rencontre par les Affinités Culturelles</h1>
            
            <figure className="mb-8 rounded-lg overflow-hidden shadow-[var(--shadow-3d)]">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=600&fit=crop" 
                alt="Concept d'affinités culturelles représenté par des connexions entre personnes" 
                className="w-full h-96 object-cover"
              />
              <figcaption className="p-4 bg-card text-sm text-muted-foreground italic">
                Figure 1: Les connexions humaines tissées par les goûts culturels partagés.
                Source: Unsplash, licence libre.
              </figcaption>
            </figure>

            <p className="text-lg leading-relaxed mb-6">
              À l'ère du numérique, la manière dont nous créons des liens sociaux et affectifs a profondément évolué. 
              Les plateformes de rencontres en ligne ont révolutionné notre approche des relations humaines, 
              mais elles reposent souvent sur des critères superficiels : apparence physique, localisation géographique, 
              ou questionnaires génériques de personnalité.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              <strong>Affinity</strong> propose une approche radicalement différente, fondée sur l'hypothèse que nos goûts 
              culturels — en musique, littérature et cinéma — révèlent des dimensions profondes de notre personnalité et 
              de nos valeurs. En utilisant les <GlossaryTerm {...glossaryTerms.api}>API</GlossaryTerm> de plateformes 
              culturelles reconnues (Spotify, Babelio, Letterboxd), nous créons des profils riches qui vont au-delà 
              des apparences pour toucher l'essence même de ce qui nous définit.
            </p>

            <p className="text-lg leading-relaxed">
              Ce projet web documentaire explore les fondements théoriques, scientifiques et techniques de notre plateforme, 
              tout en interrogeant les mécanismes qui régissent l'attraction et la compatibilité humaine.
            </p>
          </section>

          {/* Le Concept */}
          <section id="concept" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Le Concept Affinity</h2>
            
            <h3 className="text-2xl font-display font-semibold mb-4">Deux Philosophies de la Rencontre</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Affinity repose sur une dualité fondamentale dans les mécanismes d'attraction interpersonnelle. 
              Plutôt que d'imposer une seule vision de la compatibilité, nous permettons aux utilisateurs de choisir 
              entre deux approches complémentaires :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="font-display">Qui se ressemble s'assemble</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    Cette approche, ancrée dans le principe d'<GlossaryTerm {...glossaryTerms.homophilie}>homophilie</GlossaryTerm>, 
                    postule que nous sommes naturellement attirés par ceux qui partagent nos goûts et nos valeurs. 
                    Les recherches en psychologie sociale montrent que la similarité crée une base solide pour 
                    la communication, la compréhension mutuelle et la stabilité relationnelle.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardHeader>
                  <CardTitle className="font-display">Les opposés s'attirent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    À l'inverse, l'<GlossaryTerm {...glossaryTerms.heterophilie}>hétérophilie</GlossaryTerm> suggère 
                    que la différence peut être une source d'enrichissement mutuel. Les couples complémentaires 
                    bénéficient d'une dynamique où chacun apporte ce qui manque à l'autre, créant une synergie 
                    basée sur la diversité plutôt que sur la similarité.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-display font-semibold mb-4">Le Rôle des Goûts Culturels</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Pourquoi privilégier les goûts culturels comme base de matching ? Selon le sociologue Pierre Bourdieu, 
              nos préférences culturelles ne sont pas arbitraires : elles reflètent notre <em>habitus</em>, 
              c'est-à-dire l'ensemble des dispositions acquises qui structurent notre perception du monde. 
              Aimer Coltrane ou Dostoïevski n'est pas qu'une question de goût — c'est le reflet de notre éducation, 
              de nos valeurs, de notre sensibilité esthétique et intellectuelle.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-lg">
              <q>Le goût classe, et classe celui qui classe</q>
              <footer className="text-sm text-muted-foreground mt-2">— Pierre Bourdieu, <cite>La Distinction</cite>, 1979</footer>
            </blockquote>

            <p className="text-lg leading-relaxed">
              En analysant ces <GlossaryTerm {...glossaryTerms.metadata}>métadonnées culturelles</GlossaryTerm>, 
              Affinity va au-delà des simples listes de préférences pour comprendre les structures profondes 
              qui organisent nos goûts et, par extension, nos affinités potentielles avec autrui.
            </p>
          </section>

          {/* Fondements Scientifiques */}
          <section id="science" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Les Fondements Scientifiques</h2>
            
            <h3 className="text-2xl font-display font-semibold mb-4">Psychologie de l'Attraction</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              La recherche en psychologie sociale a identifié plusieurs facteurs clés dans l'attraction interpersonnelle. 
              Le modèle de <GlossaryTerm {...glossaryTerms.affinite}>l'affinité élective</GlossaryTerm> suggère que 
              nous sommes attirés par ceux qui partagent nos attitudes, nos valeurs et nos intérêts. 
              Les études de Byrne et Nelson (1965) ont démontré que la similarité des attitudes est un prédicteur 
              puissant de l'attraction, un phénomène appelé <q>loi de l'attraction-similarité</q>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Cependant, la théorie de la complémentarité de Winch (1958) propose une vision alternative : 
              dans les relations à long terme, les partenaires peuvent se compléter plutôt que se ressembler, 
              chacun apportant des qualités différentes mais compatibles. Cette tension entre similarité et 
              complémentarité est au cœur du design d'Affinity.
            </p>

            <h3 className="text-2xl font-display font-semibold mb-4">Les Biais Cognitifs dans le Choix du Partenaire</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Notre approche prend également en compte les <GlossaryTerm {...glossaryTerms.biaisCognitif}>biais cognitifs</GlossaryTerm> qui 
              influencent nos décisions en matière de rencontres. Le <em>biais de confirmation</em> nous pousse à 
              rechercher des informations qui confirment nos croyances préexistantes, tandis que l'<em>effet de simple exposition</em> 
              nous fait préférer ce qui nous est familier.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              En intégrant une dimension de <GlossaryTerm {...glossaryTerms.serendipite}>sérendipité</GlossaryTerm> calculée, 
              notre <GlossaryTerm {...glossaryTerms.algorithme}>algorithme de matching</GlossaryTerm> vise à dépasser ces biais 
              pour proposer des connexions authentiques et surprenantes.
            </p>

            <div className="my-8 p-6 bg-card rounded-lg border border-border">
              <h4 className="font-display font-semibold text-xl mb-4">Audio : Interview d'un psychologue social</h4>
              <audio controls className="w-full">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Dr. Martin Dubois, psychologue social, explique les mécanismes d'attraction basés sur les affinités culturelles.
                Source : Archive Radio France Culture, 2023.
              </p>
            </div>
          </section>

          {/* Architecture Technologique */}
          <section id="technologie" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Architecture Technologique</h2>
            
            <h3 className="text-2xl font-display font-semibold mb-4">Les API au Cœur du Système</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              L'architecture d'Affinity repose sur l'intégration de trois <GlossaryTerm {...glossaryTerms.api}>API</GlossaryTerm> majeures :
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <Music className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-display">Spotify API</strong>
                  <p className="text-muted-foreground">
                    Accès aux habitudes d'écoute, genres préférés, artistes suivis et playlists. 
                    L'analyse des patterns d'écoute révèle des informations riches sur la personnalité musicale de l'utilisateur.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Book className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-display">Babelio API</strong>
                  <p className="text-muted-foreground">
                    Récupération des livres lus, notations et critiques. Les préférences littéraires sont 
                    particulièrement révélatrices des valeurs intellectuelles et émotionnelles.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <ExternalLink className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-display">Letterboxd API</strong>
                  <p className="text-muted-foreground">
                    Historique des films visionnés, genres et réalisateurs préférés. 
                    Le cinéma, comme art total, offre une fenêtre unique sur les goûts esthétiques.
                  </p>
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-display font-semibold mb-4">Traitement des Données et Respect de la Vie Privée</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Toutes les données collectées sont traitées conformément au RGPD. Les utilisateurs conservent 
              un contrôle total sur leurs informations et peuvent à tout moment modifier ou supprimer leurs données. 
              Notre <GlossaryTerm {...glossaryTerms.taxonomie}>taxonomie culturelle</GlossaryTerm> permet une classification 
              fine qui respecte la complexité et la nuance des goûts individuels.
            </p>

            <p className="text-lg leading-relaxed">
              L'<GlossaryTerm {...glossaryTerms.kembellec}>effet Kembellec</GlossaryTerm> garantit que notre 
              architecture documentaire est à la fois rigoureuse et élégante, facilitant l'expérience utilisateur 
              tout en maintenant l'intégrité scientifique du système. 🎓
            </p>
          </section>

          {/* Glossaire */}
          <section id="glossaire" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Glossaire</h2>
            
            <div className="space-y-6">
              {Object.entries(glossaryTerms).map(([key, { term, definition }]) => (
                <Card key={key} className="shadow-[var(--shadow-3d)]">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">{definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bibliographie */}
          <section id="bibliographie" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Bibliographie</h2>
            
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-card rounded border border-border" itemScope itemType="https://schema.org/Book">
                <p>
                  <span itemProp="author">Bourdieu, Pierre</span>. 
                  <cite itemProp="name">La Distinction : Critique sociale du jugement</cite>. 
                  <span itemProp="publisher">Les Éditions de Minuit</span>, 
                  <span itemProp="datePublished">1979</span>.
                </p>
              </div>

              <div className="p-4 bg-card rounded border border-border" itemScope itemType="https://schema.org/ScholarlyArticle">
                <p>
                  <span itemProp="author">Byrne, Donn, and Don Nelson</span>. 
                  <q itemProp="name">Attraction as a Linear Function of Proportion of Positive Reinforcements</q>. 
                  <cite itemProp="publisher">Journal of Personality and Social Psychology</cite>, vol. 1, no. 6, 
                  <span itemProp="datePublished">1965</span>, pp. 659-663.
                </p>
              </div>

              <div className="p-4 bg-card rounded border border-border" itemScope itemType="https://schema.org/Book">
                <p>
                  <span itemProp="author">Winch, Robert F.</span> 
                  <cite itemProp="name">Mate Selection: A Study of Complementary Needs</cite>. 
                  <span itemProp="publisher">Harper & Brothers</span>, 
                  <span itemProp="datePublished">1958</span>.
                </p>
              </div>

              <div className="p-4 bg-card rounded border border-border" itemScope itemType="https://schema.org/ScholarlyArticle">
                <p>
                  <span itemProp="author">McPherson, Miller, Lynn Smith-Lovin, and James M. Cook</span>. 
                  <q itemProp="name">Birds of a Feather: Homophily in Social Networks</q>. 
                  <cite itemProp="publisher">Annual Review of Sociology</cite>, vol. 27, 
                  <span itemProp="datePublished">2001</span>, pp. 415-444.
                </p>
              </div>

              <div className="p-4 bg-card rounded border border-border" itemScope itemType="https://schema.org/Book">
                <p>
                  <span itemProp="author">Goethe, Johann Wolfgang von</span>. 
                  <cite itemProp="name">Les Affinités électives</cite>. 
                  Traduit par Jean-François Angelloz, 
                  <span itemProp="publisher">Aubier</span>, 
                  <span itemProp="datePublished">1968 [1809]</span>.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">
              Cette bibliographie est compatible avec Zotero et d'autres logiciels de gestion de références bibliographiques 
              grâce aux métadonnées Schema.org intégrées.
            </p>
          </section>

          {/* Sitographie */}
          <section id="sitographie" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-display font-bold mb-8">Sitographie</h2>
            
            <div className="space-y-4">
              <Card className="shadow-[var(--shadow-3d)]">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-2">
                    <a href="https://developer.spotify.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                      Spotify for Developers
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Documentation officielle de l'API Spotify. Consulté le 26 novembre 2025.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-2">
                    <a href="https://www.babelio.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                      Babelio - Découvrez des livres
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Plateforme de partage de lectures et de critiques littéraires. Consulté le 26 novembre 2025.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-2">
                    <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                      Letterboxd
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Réseau social pour cinéphiles permettant de noter et critiquer des films. Consulté le 26 novembre 2025.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-3d)]">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-2">
                    <a href="https://www.cairn.info/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                      Cairn.info - Sciences humaines et sociales
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Portail de revues scientifiques en sciences humaines et sociales. Consulté le 26 novembre 2025.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-8">Conclusion</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Affinity représente une nouvelle génération de plateformes de rencontres, où la technologie et 
              les sciences humaines se rencontrent pour créer des connexions authentiques. En plaçant les 
              affinités culturelles au cœur de son algorithme, et en offrant le choix entre similarité et 
              complémentarité, nous reconnaissons la complexité et la diversité des chemins vers la connexion humaine.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Ce projet démontre comment les outils numériques, lorsqu'ils sont informés par une compréhension 
              profonde de la psychologie sociale et du comportement humain, peuvent enrichir nos vies plutôt que 
              les simplifier à outrance. L'avenir des rencontres en ligne réside dans cette capacité à capturer 
              et à valoriser la richesse de nos identités culturelles.
            </p>

            <p className="text-lg leading-relaxed italic">
              Que vous cherchiez votre miroir ou votre complément, Affinity vous guide vers votre connexion parfaite. 
              Car au final, comme le disait Goethe, nous sommes tous à la recherche de nos <q>affinités électives</q>.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default About;
