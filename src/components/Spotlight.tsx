// // Spotlight.tsx
// import { useTheme } from "@mui/material/styles";
// import { m, MotionProps, MotionStyle } from "framer-motion";

// interface SpotlightProps extends MotionProps {
//   style?: MotionStyle;
// }

// export const Spotlight = ({ style, ...motionProps }: SpotlightProps) => {
//   const theme = useTheme();
//   const isDark = theme.palette.mode === "dark";

//   // Dégradés adaptés au thème
//   const stopTop = isDark
//     ? "rgba(255, 255, 255, 0.9)"
//     : "rgba(0, 200, 100, 0.95)";
//   const stopMiddle = isDark
//     ? "rgba(255, 255, 255, 0.45)"
//     : "rgba(0, 200, 100, 0.4)";
//   const stopBottom = isDark ? "rgba(255, 255, 255, 0)" : "rgba(0, 200, 100, 0)";

//   const gradientId = `spotlight-grad-${isDark ? "dark" : "light"}`;

//   return (
//     <m.svg
//       width="260"
//       height="460"
//       viewBox="0 0 260 460"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{
//         position: "absolute",
//         top: -545,
//         left: "10%",
//         pointerEvents: "none",
//         zIndex: 0,
//         ...style,
//       }}
//       {...motionProps}
//     >
//       <defs>
//         <linearGradient
//           id={gradientId}
//           x1="130"
//           y1="0"
//           x2="130"
//           y2="460"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0%" stopColor={stopTop} />
//           <stop offset="55%" stopColor={stopMiddle} />
//           <stop offset="100%" stopColor={stopBottom} />
//         </linearGradient>
//       </defs>

//       {/* Cône parfait : sommet (47%-53%), base (0%-100%) */}
//       <polygon
//         points="122.2,0 137.8,0 260,460 0,460"
//         fill={`url(#${gradientId})`}
//       />
//     </m.svg>
//   );
// };
// Spotlight.tsx
import { useTheme } from "@mui/material/styles";
import { m, MotionProps, MotionStyle } from "framer-motion";

interface SpotlightProps extends MotionProps {
  style?: MotionStyle;
}

export const Spotlight = ({ style, ...motionProps }: SpotlightProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Couleur du faisceau (Blanc chaud en Dark Mode, Vert néon en Light Mode)
  const primaryColor = isDark ? "255, 255, 255" : "0, 200, 100";
  const coreColor = isDark ? "255, 245, 220" : "180, 255, 220";

  return (
    <m.svg
      width="300"
      height="500"
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: -510, // Positionne la lentille juste au-dessus de la carte
        left: "50%",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
      {...motionProps}
    >
      <defs>
        {/* 1. Dégradé pour le faisceau volumétrique large (Halo) */}
        <linearGradient
          id="outerBeamGrad"
          x1="150"
          y1="20"
          x2="150"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={`rgba(${primaryColor}, 0.7)`} />
          <stop offset="30%" stopColor={`rgba(${primaryColor}, 0.25)`} />
          <stop offset="100%" stopColor={`rgba(${primaryColor}, 0)`} />
        </linearGradient>

        {/* 2. Dégradé pour le cœur lumineux concentré (Hotspot) */}
        <linearGradient
          id="coreBeamGrad"
          x1="150"
          y1="20"
          x2="150"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={`rgba(${coreColor}, 0.95)`} />
          <stop offset="20%" stopColor={`rgba(${coreColor}, 0.5)`} />
          <stop offset="80%" stopColor={`rgba(${coreColor}, 0)`} />
        </linearGradient>

        {/* 3. Halo de la lentille (Ampoule) */}
        <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={`rgba(${primaryColor}, 0.9)`} />
          <stop offset="100%" stopColor={`rgba(${primaryColor}, 0)`} />
        </radialGradient>
      </defs>

      {/* --- CALQUE 1 : Faisceau extérieur large (Halo) --- */}
      <polygon
        points="132,20 168,20 295,500 5,500"
        fill="url(#outerBeamGrad)"
      />

      {/* --- CALQUE 2 : Cœur lumineux intérieur intense --- */}
      <polygon
        points="143,20 157,20 230,500 70,500"
        fill="url(#coreBeamGrad)"
      />

      {/* --- CALQUE 3 : Lentille / Ampoule brillante --- */}
      <ellipse cx="150" cy="20" rx="18" ry="6" fill="url(#lensGlow)" />

      {/* --- CALQUE 4 : Corps métallique du projecteur (Appareil) --- */}
      <path
        d="M 125,5 L 175,5 L 168,20 L 132,20 Z"
        fill="#1A1A1A"
        stroke="#333333"
        strokeWidth="1.5"
      />
    </m.svg>
  );
};