import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: "similar" | "opposite";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quand vous écoutez de la musique avec quelqu'un, vous préférez...",
    options: [
      { text: "Partager vos artistes préférés et découvrir qu'ils les aiment aussi", value: "similar" },
      { text: "Découvrir des genres complètement nouveaux que vous n'auriez jamais écoutés", value: "opposite" }
    ]
  },
  {
    id: 2,
    question: "Dans une relation, vous recherchez principalement...",
    options: [
      { text: "Quelqu'un qui comprend exactement ce que vous ressentez", value: "similar" },
      { text: "Quelqu'un qui vous apporte une perspective différente de la vôtre", value: "opposite" }
    ]
  },
  {
    id: 3,
    question: "Votre soirée idéale serait...",
    options: [
      { text: "Discuter de vos films cultes communs devant un classique que vous adorez tous les deux", value: "similar" },
      { text: "Débattre de vos opinions opposées sur un film controversé que l'un adore et l'autre déteste", value: "opposite" }
    ]
  },
  {
    id: 4,
    question: "Concernant les livres, vous aimeriez...",
    options: [
      { text: "Échanger vos romans préférés et les lire ensemble", value: "similar" },
      { text: "Que chacun recommande des genres que l'autre ne lit jamais", value: "opposite" }
    ]
  },
  {
    id: 5,
    question: "Dans une conversation, vous appréciez quand...",
    options: [
      { text: "Vous finissez les phrases l'un de l'autre tellement vous pensez pareil", value: "similar" },
      { text: "Vous explorez des idées que vous n'auriez jamais eues seul", value: "opposite" }
    ]
  },
  {
    id: 6,
    question: "Pour vous, une connexion forte naît de...",
    options: [
      { text: "Valeurs partagées et vision commune du monde", value: "similar" },
      { text: "Complémentarité des forces et enrichissement mutuel", value: "opposite" }
    ]
  },
  {
    id: 7,
    question: "Quand vous pensez à votre partenaire idéal...",
    options: [
      { text: "Vous imaginez quelqu'un qui vibre sur la même longueur d'onde", value: "similar" },
      { text: "Vous imaginez quelqu'un qui équilibre vos faiblesses avec ses forces", value: "opposite" }
    ]
  }
];

interface PersonalityTestProps {
  onComplete: (result: "similar" | "opposite") => void;
}

export const PersonalityTest = ({ onComplete }: PersonalityTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "similar" | "opposite">>({});
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (!selectedOption) return;

    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: selectedOption as "similar" | "opposite"
    };
    setAnswers(newAnswers);
    setSelectedOption("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const similarCount = Object.values(newAnswers).filter(v => v === "similar").length;
      const oppositeCount = Object.values(newAnswers).filter(v => v === "opposite").length;
      const result = similarCount > oppositeCount ? "similar" : "opposite";
      
      setIsComplete(true);
      setTimeout(() => {
        onComplete(result);
      }, 2000);
    }
  };

  if (isComplete) {
    const similarCount = Object.values(answers).filter(v => v === "similar").length;
    const oppositeCount = Object.values(answers).filter(v => v === "opposite").length;
    const result = similarCount > oppositeCount ? "similar" : "opposite";

    return (
      <Card className="shadow-[var(--shadow-3d)] animate-scale-in">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <div className="flex justify-center">
            <Sparkles className="h-16 w-16 text-accent animate-pulse" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold">
              {result === "similar" ? "Qui se ressemble s'assemble" : "Les opposés s'attirent"}
            </h3>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {result === "similar" 
                ? "Vous recherchez des connexions basées sur des passions communes et une vision partagée du monde."
                : "Vous êtes attiré par la complémentarité et l'enrichissement mutuel à travers les différences."}
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Score: {similarCount} similitude • {oppositeCount} complémentarité
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-[var(--shadow-3d)] animate-fade-in">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-accent" />
        </div>
        <CardTitle className="text-4xl font-display">Test de Personnalité</CardTitle>
        <CardDescription className="text-lg">
          Question {currentQuestion + 1} sur {questions.length}
        </CardDescription>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-display font-semibold text-center leading-relaxed">
            {questions[currentQuestion].question}
          </h3>

          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Label
                  key={index}
                  htmlFor={`option-${index}`}
                  className="flex items-start space-x-4 p-6 rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition-all cursor-pointer group"
                >
                  <RadioGroupItem 
                    value={option.value} 
                    id={`option-${index}`} 
                    className="mt-1 group-hover:border-accent" 
                  />
                  <div className="flex-1">
                    <p className="leading-relaxed group-hover:text-accent transition-colors">
                      {option.text}
                    </p>
                  </div>
                </Label>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Précédent
          </Button>
          <Button
            onClick={handleAnswer}
            disabled={!selectedOption}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {currentQuestion === questions.length - 1 ? "Terminer" : "Suivant"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
