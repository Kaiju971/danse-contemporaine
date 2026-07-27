import { motion } from "framer-motion";
import {
  CoursesContainer,
  CourseCard,
  CourseLevelChip,
} from "./courses.styled";
import {
  Container,
  Grid,
  Typography,
  CardContent,
  Box,
  Button,
} from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Contemporain Débutant",
    description:
      "Découverte des bases de la danse contemporaine pour tous les âges.",
    duration: "1h",
    level: "Débutant",
  },
  {
    id: 2,
    title: "Contemporain Intermédiaire",
    description:
      "Approfondissement des techniques et travail sur l'expression corporelle.",
    duration: "1h30",
    level: "Intermédiaire",
  },
  {
    id: 3,
    title: "Atelier Création",
    description:
      "Création chorégraphique collective pour les danseurs confirmés.",
    duration: "2h",
    level: "Avancé",
  },
];

export const Courses = () => {
  return (
    <CoursesContainer id="courses">
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
            NOS COURS
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 2, color: "text.primary", maxWidth: 600, mx: "auto" }}
          >
            Découvrez nos cours de danse pour bouger, vous renforcer et vous
            faire du bien dans une ambiance bienveillante et inspirante.
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {courses.map((course, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <CourseCard>
                  <CardContent>
                    <CourseLevelChip label={course.level} size="small" />
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "50px" }}
                      gutterBottom
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {course.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        ⏱ {course.duration}
                      </Typography>
                      <Button
                        size="small"
                        sx={{ color: "primary.main" }}
                        onClick={() =>
                          document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                      >
                        S'inscrire →
                      </Button>
                    </Box>
                  </CardContent>
                </CourseCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CoursesContainer>
  );
};
