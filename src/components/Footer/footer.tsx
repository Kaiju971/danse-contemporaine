import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FooterContainer, FooterLink, FooterText } from "./footer.styled";

// ✅ 1. Ajoute cette interface en haut du fichier
interface FooterProps {
  onLegalNoticeClick?: () => void;
  onPrivacyClick?: () => void; // Optionnel pour la politique de confidentialité
}

export const Footer = ({ onLegalNoticeClick, onPrivacyClick }: FooterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
    >
      <FooterContainer>
        <FooterText variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Danse Contemporaine. Tous droits
          réservés.{" "}
          <FooterLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLegalNoticeClick?.(); // ✅ Appelle la fonction au clic
            }}
          >
            Mentions légales
          </FooterLink>
          {" - "}
          <FooterLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPrivacyClick?.(); // ✅ Appelle la fonction au clic
            }}
          >
            Politique de confidentialité
          </FooterLink>
        </FooterText>

        <Typography
          variant="caption"
          component="p"
          sx={{ color: "text.secondary", mt: 1 }}
        >
          Site conçu par SWAM Concept
        </Typography>
      </FooterContainer>
    </motion.div>
  );
};
