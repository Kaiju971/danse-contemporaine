// import { styled } from "@mui/material/styles";
// import { Box, Paper, Typography } from "@mui/material";

// export const ScheduleContainer = styled(Box)(({ theme }) => ({
//   minHeight: "100vh",
//   background: theme.palette.background.paper,
//   padding: theme.spacing(8, 0),
// }));

// // Grid (pas flex) avec des colonnes à largeur fixe (1fr) : chaque
// // colonne fait exactement la même largeur sur toutes les lignes, peu
// // importe la longueur du texte à l'intérieur (contrairement à flexGrow
// // qui varie selon le contenu du voisin).
// export const ScheduleItem = styled(Paper)(({ theme }) => ({
//   display: "grid",
//   gridTemplateColumns: "40px 1fr 1fr auto",
//   alignItems: "center",
//   gap: theme.spacing(2),
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius,
//   border: `1px solid ${theme.palette.divider}`,
//   transition: "all 0.3s ease",
//   "&:hover": {
//     borderColor: theme.palette.primary.main,
//     background: "rgba(255, 255, 255, 0.05)",
//   },
// }));

// export const DayCircle = styled(Box)(({ theme }) => ({
//   width: 40,
//   height: 40,
//   borderRadius: "50%",
//   background: "rgba(0, 255, 136, 0.2)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexShrink: 0,
// }));

import { styled } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";

export const ScheduleContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
}));

export const ScheduleItem = styled(Paper)(({ theme }) => ({
  display: "grid",
  // ✅ Desktop: 4 colonnes (jour, heure, cours, bouton)
  gridTemplateColumns: "40px 1fr 1fr auto",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    background: "rgba(255, 255, 255, 0.05)",
  },
  // ✅ Mobile: 2 colonnes (jour + infos, bouton sur une nouvelle ligne)
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "40px 1fr",
    gridTemplateAreas: `
      "circle day-time"
      "button button"
    `,
  },
}));

export const DayCircle = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "rgba(0, 255, 136, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  // ✅ Positionne le cercle dans la bonne zone sur mobile
  [theme.breakpoints.down("sm")]: {
    gridArea: "circle",
  },
}));