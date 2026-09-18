import { styled } from "@mui/material/styles";
import { Box, Link,Typography } from "@mui/material";

// text-center pt-12 border-t border-white/10
export const FooterContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(6),
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: "text.secondary", // Vert fluo comme ton thème
  textDecoration: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "text.secondary", // Vert un peu plus clair au survol
    textDecoration: "underline",
  },
  fontSize: "0.875rem", // Taille légèrement réduite
}));

// Texte du Footer (pour les droits d'auteur)
export const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(2),
  fontSize: "0.875rem",
}));
