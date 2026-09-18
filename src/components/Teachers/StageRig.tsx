// StageRig.tsx
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { m } from "framer-motion";

interface StageRigProps {
  activeTeacherId: number | null;
  isModalOpen: boolean;
  isMobile: boolean;
}

interface SpotConfig {
  id: string;
  teacherId: number;
  mountX: number; // Position sur la rampe (centrée sur 1000)
  angle: number; // Inclinaison du projecteur
  beamLength: number; // Longueur du faisceau
}

// Coordonnées ajustées pour éviter tout chevauchement
const SPOTS: SpotConfig[] = [
  // --- PROF 3 : Anne-Sophie (Cible: 200px) ---
  { id: "3L", teacherId: 3, mountX: 130, angle: 18, beamLength: 260 },
  { id: "3R", teacherId: 3, mountX: 270, angle: -18, beamLength: 260 },

  // --- PROF 2 : Pascale (Cible: 430px) ---
  { id: "2L", teacherId: 2, mountX: 360, angle: 10, beamLength: 520 },
  { id: "2R", teacherId: 2, mountX: 500, angle: -10, beamLength: 520 },

  // --- PROF 1 : Wendy (Cible: 620px) ---
  { id: "1L", teacherId: 1, mountX: 570, angle: 16, beamLength: 260 },
  { id: "1R", teacherId: 1, mountX: 670, angle: -16, beamLength: 260 },
];

export const StageRig = ({
  activeTeacherId,
  isModalOpen,
  isMobile,
}: StageRigProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  if (isMobile) return null;

  const beamColor = isDark ? "255, 255, 255" : "0, 200, 100";
  const coreColor = isDark ? "255, 245, 220" : "180, 255, 220";

  return (
    /* 🟢 Conteneur Flexbox pour assurer un centrage absolu */
    <Box
      sx={{
        position: "absolute",
        top: "-15.5rem",
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMin slice"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          {/* Dégradé métallique */}
          <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#111115" />
            <stop offset="40%" stopColor="#3A3A42" />
            <stop offset="70%" stopColor="#222228" />
            <stop offset="100%" stopColor="#0D0D10" />
          </linearGradient>

          {/* Dégradé faisceau externe */}
          <linearGradient id="outerBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`rgba(${beamColor}, 0.65)`} />
            <stop offset="45%" stopColor={`rgba(${beamColor}, 0.2)`} />
            <stop offset="100%" stopColor={`rgba(${beamColor}, 0)`} />
          </linearGradient>

          {/* Dégradé cœur brillant */}
          <linearGradient id="coreBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`rgba(${coreColor}, 0.95)`} />
            <stop offset="30%" stopColor={`rgba(${coreColor}, 0.4)`} />
            <stop offset="100%" stopColor={`rgba(${coreColor}, 0)`} />
          </linearGradient>

          {/* Halo lentille allumée */}
          <radialGradient id="lensActive" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor={`rgba(${beamColor}, 0.9)`} />
            <stop offset="100%" stopColor={`rgba(${beamColor}, 0)`} />
          </radialGradient>
        </defs>

        {/* --- RAMPE TECHNIQUE (TRUSS) --- */}
        {/* 🟢 Centrée de x=50 à x=950 (Largeur 900, milieu exact à 500px) */}
        <g id="truss-rig">
          <rect
            x="50"
            y="10"
            width="900"
            height="18"
            rx="3"
            fill="url(#metalGrad)"
            stroke="#444"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="14"
            x2="950"
            y2="14"
            stroke="#666"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
        </g>

        {/* --- LES 6 PROJECTEURS --- */}
        {SPOTS.map((spot) => {
          const isActive = activeTeacherId === spot.teacherId && !isModalOpen;

          return (
            <g key={spot.id} transform={`translate(${spot.mountX}, 18)`}>
              {/* Crochet d'accroche */}
              <rect
                x="-4"
                y="-8"
                width="8"
                height="12"
                fill="#222"
                stroke="#555"
                strokeWidth="1"
              />

              {/* Ensemble orienté */}
              <g transform={`rotate(${spot.angle})`}>
                {/* FAISCEAU LUMINEUX */}
                <m.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <polygon
                    points={`-7,38 7,38 ${spot.angle > 0 ? 90 : -90},${spot.beamLength} ${spot.angle > 0 ? -30 : 30},${spot.beamLength}`}
                    fill="url(#outerBeam)"
                  />
                  <polygon
                    points={`-4,38 4,38 ${spot.angle > 0 ? 50 : -50},${spot.beamLength} ${spot.angle > 0 ? -10 : 10},${spot.beamLength}`}
                    fill="url(#coreBeam)"
                  />
                </m.g>

                {/* Lyre */}
                <path
                  d="M -16,10 L -16,24 L 16,24 L 16,10"
                  fill="none"
                  stroke="#333"
                  strokeWidth="3"
                />

                {/* Corps métallique */}
                <rect
                  x="-13"
                  y="10"
                  width="26"
                  height="28"
                  rx="2"
                  fill="url(#metalGrad)"
                  stroke="#444"
                  strokeWidth="1"
                />
                <line
                  x1="-10"
                  y1="16"
                  x2="10"
                  y2="16"
                  stroke="#111"
                  strokeWidth="1.5"
                />
                <line
                  x1="-10"
                  y1="20"
                  x2="10"
                  y2="20"
                  stroke="#111"
                  strokeWidth="1.5"
                />
                <line
                  x1="-10"
                  y1="24"
                  x2="10"
                  y2="24"
                  stroke="#111"
                  strokeWidth="1.5"
                />
                <circle cx="-14" cy="22" r="2.5" fill="#555" />
                <circle cx="14" cy="22" r="2.5" fill="#555" />

                {/* Volets coupe-flux */}
                <polygon
                  points="-14,37 -20,48 -14,46"
                  fill="#181818"
                  stroke="#333"
                  strokeWidth="0.8"
                />
                <polygon
                  points="14,37 20,48 14,46"
                  fill="#181818"
                  stroke="#333"
                  strokeWidth="0.8"
                />

                {/* Lentille */}
                <ellipse
                  cx="0"
                  cy="38"
                  rx="12"
                  ry="3.5"
                  fill={isActive ? "url(#lensActive)" : "#1A202C"}
                  stroke="#444"
                  strokeWidth="1"
                />
              </g>
            </g>
          );
        })}
      </svg>
    </Box>
  );
};
