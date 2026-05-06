"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-chocolate/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
      >
        <span
          className={cn(
            "font-semibold text-base md:text-lg transition-colors duration-200",
            isOpen ? "text-gold" : "text-chocolate-dark group-hover:text-gold"
          )}
        >
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 text-gold transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-chocolate-mid leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
