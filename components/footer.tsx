"use client";

import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/i18n/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">antonio@portfolio</span>
            <span className="text-muted-foreground">:~$ </span>
            <span className="text-foreground">{t.footer.exitWord}</span>
            <span className="text-primary cursor-blink ml-1">▌</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary/50">// </span>
            {t.footer.builtWith} <span className="text-primary/50">©</span> 2025 Antonio Melino
          </p>
        </div>
      </div>
    </footer>
  );
}
