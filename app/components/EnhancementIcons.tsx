import React from "react";

const cls = "w-[18px] h-[18px] text-[#22BFFF]";
const props = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function RubberMatIcon() {
    return (
        <svg {...props} className={cls}>
            <rect x="2" y="14" width="20" height="6" rx="2"/>
            <path d="M6 10 L6 14"/>
            <path d="M10 8 L10 14"/>
            <path d="M14 8 L14 14"/>
            <path d="M18 10 L18 14"/>
            <circle cx="6" cy="7" r="1.5"/>
            <circle cx="10" cy="5" r="1.5"/>
            <circle cx="14" cy="5" r="1.5"/>
            <circle cx="18" cy="7" r="1.5"/>
        </svg>
    );
}

export function LeatherIcon() {
  return (
    <svg {...props} className={cls}>
      <path d="M3 10 Q4 4 12 4 Q20 4 21 10 L21 18 Q21 20 19 20 L5 20 Q3 20 3 18 Z"/>
      <path d="M3 10 Q7 13 12 13 Q17 13 21 10"/>
      <line x1="8" y1="13" x2="8" y2="20"/>
      <line x1="16" y1="13" x2="16" y2="20"/>
    </svg>
  );
}

export function InteriorGlowIcon() {
  return (
    <svg {...props} className={cls}>
      <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z"/>
      <path d="M19 16 L19.75 18.5 L22 19 L19.75 19.5 L19 22 L18.25 19.5 L16 19 L18.25 18.5 Z"/>
      <path d="M5 3 L5.5 4.75 L7 5 L5.5 5.25 L5 7 L4.5 5.25 L3 5 L4.5 4.75 Z"/>
    </svg>
  );
}

export function StainOdorIcon() {
  return (
    <svg {...props} className={cls}>
      <path d="M12 2 C12 2 5 9 5 14 C5 17.866 8.134 21 12 21 C15.866 21 19 17.866 19 14 C19 9 12 2 12 2Z"/>
      <line x1="9" y1="13" x2="15" y2="17"/>
      <line x1="15" y1="13" x2="9" y2="17"/>
    </svg>
  );
}

export function TrimRestoreIcon() {
    return (
        <svg {...props} className={cls}>
            <rect x="2" y="9" width="20" height="6" rx="3"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M2 7 L6 4" strokeDasharray="1 2"/>
            <path d="M7 7 L11 4" strokeDasharray="1 2"/>
            <path d="M13 7 L17 4"/>
            <path d="M18 7 L22 4"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth={2}/>
        </svg>
    );
}

export function SmoothSurfaceIcon() {
    return (
        <svg {...props} className={cls}>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2 C17.523 2 22 6.477 22 12"/>
            <path d="M22 12 C22 17.523 17.523 22 12 22"/>
            <path d="M12 22 C6.477 22 2 17.523 2 12"/>
            <path d="M2 12 C2 6.477 6.477 2 12 2"/>
            <path d="M19 5 L22 2 L22 8 Z" fill="currentColor" stroke="none"/>
        </svg>
    );
}

export function EngineBayIcon() {
  return (
    <svg {...props} className={cls}>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="12" r="7"/>
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/>
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/>
      <line x1="19.07" y1="4.93" x2="16.95" y2="7.05"/>
      <line x1="7.05" y1="16.95" x2="4.93" y2="19.07"/>
    </svg>
  );
}

export function CeramicWashIcon() {
  return (
    <svg {...props} className={cls}>
      <path d="M12 3 C12 3 6 9 6 14 C6 17.314 8.686 20 12 20 C15.314 20 18 17.314 18 14 C18 9 12 3 12 3Z"/>
      <path d="M9 14 C9 15.657 10.343 17 12 17"/>
      <line x1="6" y1="7" x2="3" y2="5"/>
      <line x1="18" y1="7" x2="21" y2="5"/>
      <line x1="12" y1="3" x2="12" y2="1"/>
    </svg>
  );
}

export function IceLuxShieldIcon() {
  return (
    <svg {...props} className={cls}>
      <path d="M12 2 L20 6 L20 12 C20 16.418 16.418 20.5 12 22 C7.582 20.5 4 16.418 4 12 L4 6 Z"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/>
      <line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/>
    </svg>
  );
}

export function CrystalCoatIcon() {
    return (
        <svg {...props} className={cls}>
            <path d="M12 2 L20 6 L20 13 C20 17 16.418 20.5 12 22 C7.582 20.5 4 17 4 13 L4 6 Z"/>
            <path d="M12 6 L16 8 L16 12 C16 14.5 14.2 16.5 12 17.5 C9.8 16.5 8 14.5 8 12 L8 8 Z"/>
            <line x1="15" y1="5" x2="17" y2="3"/>
            <line x1="18" y1="8" x2="20" y2="7"/>
            <line x1="17" y1="11" x2="19" y2="12"/>
        </svg>
    );
}

export const enhancementIconMap: Record<string, () => React.ReactElement> = {
  "/icons/rubber-mat.svg": RubberMatIcon,
  "/icons/leather.svg": LeatherIcon,
  "/icons/interior-glow.svg": InteriorGlowIcon,
  "/icons/stain-odor.svg": StainOdorIcon,
  "/icons/trim-restore.svg": TrimRestoreIcon,
  "/icons/smooth-surface.svg": SmoothSurfaceIcon,
  "/icons/engine-bay.svg": EngineBayIcon,
  "/icons/ceramic-wash.svg": CeramicWashIcon,
  "/icons/icelux-shield.svg": IceLuxShieldIcon,
  "/icons/crystal-coat.svg": CrystalCoatIcon,
};
