"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
}

export function CopyButton({ textToCopy, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar", err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-1">
      {label && <span className="font-sans text-gray-700">{label}:</span>}
      
      <button 
        onClick={handleCopy}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 group",
          copied 
            ? " border-green-500 text-green-700" 
            : " border-gray-300 hover:border-blue-dark hover:text-blue-dark"
        )}
      >
        <span className="font-mono text-sm font-bold">{textToCopy}</span>
        {copied ? <Check size={14} /> : <Copy size={14} className="opacity-50 group-hover:opacity-100" />}
      </button>
      
      {copied && <span className="text-xs text-green-600 font-bold animate-pulse">Copiado!</span>}
    </div>
  );
}