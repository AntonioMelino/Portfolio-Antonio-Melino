"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_PREVIEW_COUNT = 2;

interface CollapsibleAchievementsProps {
  achievements: string[];
  isMobile: boolean;
  previewCount?: number;
  listClassName?: string;
  itemClassName?: string;
  bulletClassName?: string;
  textClassName?: string;
  extraItemsTopClassName?: string;
}

export function CollapsibleAchievements({
  achievements,
  isMobile,
  previewCount = DEFAULT_PREVIEW_COUNT,
  listClassName = "space-y-2",
  itemClassName = "flex items-start gap-2 text-sm",
  bulletClassName = "font-mono text-primary mt-0.5 flex-shrink-0",
  textClassName = "text-muted-foreground",
  extraItemsTopClassName = "pt-2",
}: CollapsibleAchievementsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasCollapsibleItems = isMobile && achievements.length > previewCount;
  const previewItems = hasCollapsibleItems
    ? achievements.slice(0, previewCount)
    : achievements;
  const extraItems = hasCollapsibleItems
    ? achievements.slice(previewCount)
    : [];

  return (
    <>
      <ul className={listClassName}>
        {previewItems.map((item, i) => (
          <li key={i} className={itemClassName}>
            <span className={bulletClassName}>▸</span>
            <span className={textClassName}>{item}</span>
          </li>
        ))}
      </ul>

      {hasCollapsibleItems && (
        <>
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <ul className={cn(listClassName, extraItemsTopClassName, "overflow-hidden")}>
              {extraItems.map((item, i) => (
                <li key={i} className={itemClassName}>
                  <span className={bulletClassName}>▸</span>
                  <span className={textClassName}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="mt-3 font-mono text-xs text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? "Ver menos" : `Ver ${extraItems.length} más`}
          </button>
        </>
      )}
    </>
  );
}
