import { motion } from "framer-motion";
import { ScheduleContainer, ScheduleItem, DayCircle } from "./schedule.styled";
import { Container, Typography, Box } from "@mui/material";

const schedule = [
  { day: "Lundi", time: "18h-19h", course: "Contemporain Débutant" },
  { day: "Mardi", time: "19h-20h30", course: "Contemporain Intermédiaire" },
  { day: "Mercredi", time: "16h-17h", course: "Contemporain Enfant" },
  { day: "Jeudi", time: "20h-21h30", course: "Atelier Création" },
  { day: "Samedi", time: "10h-11h", course: "Contemporain Débutant" },
];

export const Schedule = () => {
  return (
    <ScheduleContainer id="schedule">
      <Container maxWidth="md">
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
            PLANNING
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 2, color: "text.secondary" }}
          >
            Retrouvez nos horaires de cours pour la saison en cours.
          </Typography>
        </motion.div>

        <Box sx={{ mt: 4 }}>
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ScheduleItem>
                <DayCircle>
                  <Typography variant="h6">{item.day.charAt(0)}</Typography>
                </DayCircle>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {item.day}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {item.course}
                </Typography>
                <Box
                  component="button"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    ml: 2,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  S'inscrire
                </Box>
              </ScheduleItem>
            </motion.div>
          ))}
        </Box>
      </Container>
    </ScheduleContainer>
  );
};
