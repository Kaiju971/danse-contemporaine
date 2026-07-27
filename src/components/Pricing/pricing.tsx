import { motion } from "framer-motion";
import {
  PricingContainer,
  PricingCard,
  Price,
  PricingButton,
} from "./pricing.styled";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";

const pricingOptions = [
  {
    id: 1,
    type: "Cours à l'unité",
    price: "15€",
    detail: "Par cours",
    isFeatured: false,
  },
  {
    id: 2,
    type: "Abonnement Mensuel",
    price: "50€",
    detail: "4 cours/mois",
    isFeatured: true,
  },
  {
    id: 3,
    type: "Abonnement Annuel",
    price: "450€",
    detail: "Économie de 10%",
    isFeatured: false,
  },
  {
    id: 4,
    type: "Cours Enfant",
    price: "12€",
    detail: "Par cours",
    isFeatured: false,
  },
];

export const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            TARIFS
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 2, color: "text.secondary" }}
          >
            Des formules adaptées à tous les budgets et à tous les niveaux.
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mt: 2}}>
          {pricingOptions.map((option, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={option.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <PricingCard isFeatured={option.isFeatured}>
                  <Typography variant="h4" gutterBottom sx={{fontSize: "2rem"}}>
                    {option.type}
                  </Typography>
                  <Divider
                    sx={{ my: 2, background: "rgba(255,255,255,0.2)" }}
                  />
                  <Price>{option.price}</Price>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                    }}
                  >
                    /mois
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "text.secondary" }}
                  >
                    {option.detail}
                  </Typography>
                  <PricingButton
                    fullWidth
                    variant="contained"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    S'inscrire
                  </PricingButton>
                </PricingCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PricingContainer>
  );
};
