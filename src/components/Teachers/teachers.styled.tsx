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

export const TeacherCard = styled(Card)(({ theme }) => ({
  width: 250,
  height: 250,
  marginTop:'-2rem',
  borderRadius: "50%",
  overflow: "hidden",
  position: "absolute",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: `2px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "scale(1.1)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 25px rgba(0, 255, 136, 0.3)`,
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
  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
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
