import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FooterContainer, FooterLink } from "./footer.styled";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
    >
      <FooterContainer>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
          © 2026 École de Danse Contemporaine. Tous droits réservés.{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            |
          </Typography>{" "}
          <FooterLink href="#">Mentions légales</FooterLink>
        </Typography>

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
