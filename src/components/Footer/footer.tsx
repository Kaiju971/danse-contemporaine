import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FooterContainer, FooterLink, FooterText } from "./footer.styled";

export const Footer = () => {
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
          <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
          {" - "}
          <FooterLink href="/confidentialite">
            Politique de confidentialité
          </FooterLink>
        </FooterText>

        <Typography
          variant="caption"
          component="p"
          sx={{ color: "rgba(255, 255, 255, 0.4)", mt: 1 }}
        >
          Site conçu par SWAM Concept
        </Typography>
      </FooterContainer>
    </motion.div>
  );
};
