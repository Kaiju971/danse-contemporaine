import { useState } from "react";
import { motion } from "framer-motion";
import {
  TeachersContainer,
  TeachersCircleContainer,
  TeacherCard,
  TeacherCardContent,
  ModalCard,
  ModalImage,
} from "./teachers.styled";
import {
  Container,
  Typography,
  Box,
  Modal,
  Button,
  CardContent,
  Divider,
} from "@mui/material";

const teachers = [
  {
    id: 1,
    name: "Wendy",
    role: "Trésorière – Le lien entre idées et organisation",
    description:
      "Wendy transforme nos idées en actions concrètes. Son écoute attentive et sa précision font rayonner notre vision.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Pascale",
    role: "Fondatrice",
    description:
      "Fondée par Pascale, Danse contemporaine est une école pleine d'énergie et de bienveillance.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Anne-Sophie",
    role: "Professeure",
    description:
      "Spécialiste des cours pour enfants, Anne-Sophie allie créativité et pédagogie pour éveiller la passion de la danse.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
];

export const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);

  // radius en % de la taille du conteneur : 35 garde les cartes bien
  // à l'intérieur (centre ± 35%, donc entre 15% et 85%).
  const radius = 30;
  const center = { x: 35, y: 35 };

  // On récupère le prof sélectionné une seule fois, au lieu de refaire
  // teachers.find(...) à chaque endroit où on en a besoin.
  const activeTeacher = teachers.find((t) => t.id === selectedTeacher);

  return (
    <TeachersContainer id="teachers">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            NOS PROFESSEURS
          </Typography>
          <Typography
            variant="body1"
            align="center"
            
            sx={{mb:2,
              color: "text.secondary"
            }}
          >
            Rencontrez notre équipe passionnée et diplômée, prête à vous
            accompagner dans votre parcours artistique.
          </Typography>
        </motion.div>
      </Container>
      <TeachersCircleContainer>
        {teachers.map((teacher, index) => {
          const angle = (index / teachers.length) * 360;
          // Le "translate(-50%, -50%)" plus bas centre déjà la carte sur ce
          // point : pas besoin de soustraire 50 ici (ça mélangeait px et %).
          const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
          const y = center.y + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setSelectedTeacher(teacher.id)}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.05) 360%)",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
              />
              <TeacherCard>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <TeacherCardContent>
                  <Typography variant="h6">{teacher.name}</Typography>
                  <Typography variant="caption">{teacher.role}</Typography>
                </TeacherCardContent>
              </TeacherCard>
            </motion.div>
          );
        })}

        <Modal
          open={selectedTeacher !== null}
          onClose={() => setSelectedTeacher(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {activeTeacher && (
              <ModalCard>
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <ModalImage>
                    <img
                      src={activeTeacher.image}
                      alt={activeTeacher.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </ModalImage>
                  <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                    {activeTeacher.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "primary.main",
                      mb: 2
                    }}>
                    {activeTeacher.role}
                  </Typography>
                  <Divider
                    sx={{ my: 2, background: "rgba(255,255,255,0.2)" }}
                  />
                  <Typography variant="body2" sx={{
                    color: "text.secondary"
                  }}>
                    {activeTeacher.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      background:
                        "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
                    }}
                    onClick={() => setSelectedTeacher(null)}
                  >
                    Fermer
                  </Button>
                </CardContent>
              </ModalCard>
            )}
          </motion.div>
        </Modal>
      </TeachersCircleContainer>
    </TeachersContainer>
  );
};
