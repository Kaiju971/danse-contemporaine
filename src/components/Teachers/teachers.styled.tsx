import { styled } from "@mui/material/styles";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export const TeachersContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
}));


export const TeachersCircleContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// export const TeacherCard = styled(Card)(({ theme }) => ({
//   width: 250,
//   height: 250,
//   marginTop:'-2rem',
//   borderRadius: "50%",
//   overflow: "hidden",
//   position: "absolute",
//   cursor: "pointer",
//   transition: "all 0.3s ease",
//   border: `2px solid ${theme.palette.divider}`,
//   "&:hover": {
//     transform: "scale(1.1)",
//     borderColor: theme.palette.primary.main,
//     boxShadow: `0 0 25px rgba(0, 255, 136, 0.3)`,
//   },
// }));

export const TeacherCard = styled(Card)(({ theme }) => ({
  width: 250,
  height: 250,
  marginTop: "-2rem",
  borderRadius: "50%",
  overflow: "hidden",
  position: "absolute",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  // 1. Bordure nette et brillante (type story / profil Facebook)
  border: `3px solid ${theme.palette.mode === "dark" ? "#00ff88" : "#ffffff"}`,

  // 2. Ombre portée prononcée pour décoller la carte du fond du site
  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)",

  // 3. Vignettage radial : assombrit les bords pour faire ressortir le centre (le visage)
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.35) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  },

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    // Boost de clarté et de saturation
    filter: "contrast(1.1) brightness(1.03) saturate(1.1)",
    transition: "transform 0.4s ease, filter 0.3s ease",
  },

  "&:hover": {
    transform: "scale(1.06)",
    boxShadow: "0 16px 32px rgba(0, 255, 136, 0.3)",
    "& img": {
      transform: "scale(1.05)",
      filter: "contrast(1.15) brightness(1.05) saturate(1.15)",
    },
  },
}));

// Dégradé de légende sur la photo : reste volontairement sombre + texte
// blanc quel que soit le thème du site, car il doit contraster avec une
// PHOTO (pas avec le fond de page).
export const TeacherCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.93) 0%, transparent 100%)",
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  textAlign: "center",
}));

// Faisceau de projecteur : cône fin en haut, large en bas, positionné
// au-dessus de la carte (top négatif). pointerEvents "none" pour ne
// jamais gêner le clic/survol de la carte en dessous.
// Le décalage horizontal (x: "-50%") et la rotation sont passés au cas
// par cas via la prop "style" dans Teachers.tsx, pour que framer-motion
// gère lui-même la composition du transform (translation + rotation).
// Blanc en dark (rayon de lumière classique) ; vert lime (couleur de
// marque) en light, sinon un faisceau blanc est invisible sur fond clair.
export const Spotlight = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: -545,
  left: "50%",
  width: 260,
  height: 460,
  clipPath: "polygon(47% 0%, 53% 0%, 100% 100%, 0% 100%)",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.485) 55%, transparent 100%)"
      : "linear-gradient(to bottom, rgba(0, 200, 100, 0.95) 0%, rgba(0, 200, 100, 0.4) 55%, transparent 100%)",
  filter: "blur(4px)",
  pointerEvents: "none",
  zIndex: 0,
}));

export const ModalCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: `0 0 30px rgba(0, 255, 136, 0.2)`,
  background: theme.palette.background.paper,
}));

export const ModalImage = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  overflow: "hidden",
  margin: "0 auto",
  border: `3px solid ${theme.palette.primary.main}`,
}));
