import { Box, Typography } from "@mui/material";

export const Navigation = () => {
  // ✅ Ajoute "export" devant chaque composant
  return (
    <Box id="about" sx={{ py: 10, background: "rgba(0,0,0,0.2)" }}>
      <Typography variant="h2">À propos</Typography>
      {/* Ton contenu ici */}
    </Box>
  );
};
