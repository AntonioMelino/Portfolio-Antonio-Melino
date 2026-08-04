// Regional-indicator flag emoji (🇪🇸/🇬🇧) fall back to "ES"/"GB" text on
// Windows (Segoe UI Emoji lacks flag glyphs), so these render as SVG instead.
export const FlagES = () => (
  <svg
    viewBox="0 0 3 2"
    aria-hidden="true"
    className="h-3 w-[18px] shrink-0 overflow-hidden rounded-[2px]"
  >
    <rect width="3" height="2" fill="#AA151B" />
    <rect y="0.5" width="3" height="1" fill="#F1BF00" />
  </svg>
);

export const FlagGB = () => (
  <svg
    viewBox="0 0 60 30"
    aria-hidden="true"
    className="h-3 w-6 shrink-0 overflow-hidden rounded-[2px]"
  >
    <clipPath id="flag-gb-s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="flag-gb-t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#flag-gb-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#flag-gb-t)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);
