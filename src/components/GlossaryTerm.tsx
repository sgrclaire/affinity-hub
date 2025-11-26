import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GlossaryTermProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export const GlossaryTerm = ({ term, definition, children }: GlossaryTermProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-accent hover:text-accent/80 underline decoration-dotted underline-offset-4 transition-colors cursor-help font-medium">
          {children || term}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{term}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-4">
            {definition}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
