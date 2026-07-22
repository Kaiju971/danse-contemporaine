import { motion } from "framer-motion";
import {
  AboutContainer,
  StatsCard,
  StatNumber,
  StatLabel,
} from "./about.styled";
import { Container, Grid, Typography } from "@mui/material";

const stats = [
  { number: "10+", label: "Années d'expérience" },
  { number: "50+", label: "Élèves formés" },
  { number: "5", label: "Professeurs diplômés" },
  { number: "100%", label: "Passion" },
];

export const About = () => {
  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" gutterBottom>
                L'ÉCOLE DE DANSE{" "}
                <span style={{ color: "#00ff88" }}>CONTEMPORAINE</span>
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Fondée par Pascale, notre école est un lieu où la danse
                contemporaine devient accessible à toutes et à tous.
              </Typography>
              <Typography variant="body1">
                Nous croyons en une approche bienveillante et énergique, où
                chaque élève peut développer sa confiance en soi, sa créativité
                et son expression corporelle dans une ambiance chaleureuse et
                inspirante.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid size={6} key={index}>
                    <StatsCard>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatsCard>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};
