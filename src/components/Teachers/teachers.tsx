import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  TeachersContainer,
  TeachersCircleContainer,
  TeacherCard,
  TeacherCardContent,
  Spotlight,
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image1 from "../../assets/image/Ellipse 2.webp";
import image2 from "../../assets/image/Ellipse3-HDR.webp";
import image3 from "../../assets/image/Ellipse 4.webp";

const teachers = [
  {
    id: 1,
    name: "Wendy",
    role: "Trésorière – Le lien entre idées et organisation",
    description:
      "Wendy transforme nos idées en actions concrètes. Son écoute attentive et sa précision font rayonner notre vision.",
    image: image2,
    position: { x: 62, y: 18 },
  },
  {
    id: 2,
    name: "Pascale",
    role: "Fondatrice & Professeure",
    description:
      "Fondée par Pascale, Danse contemporaine est une école pleine d'énergie et de bienveillance.",
    image: image3,
    position: { x: 43, y: 60 },
  },
  {
    id: 3,
    name: "Anne-Sophie",
    role: "Professeure",
    description:
      "Spécialiste des cours pour enfants, Anne-Sophie allie créativité et pédagogie pour éveiller la passion de la danse.",
    image: image1,
    position: { x: 20, y: 18 },
  },
];

export const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [hoveredTeacher, setHoveredTeacher] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const canHover = useMediaQuery("(hover: hover)");

  const isModalOpen = selectedTeacher !== null;
  const isAnyHovered = hoveredTeacher !== null;
  const isDimmed = isAnyHovered || isModalOpen;

  const activeTeacher = teachers.find((t) => t.id === selectedTeacher);

  const handleCardClick = (id: number) => {
    if (isMobile) {
      if (hoveredTeacher === id) {
        setSelectedTeacher(id);
      } else {
        setHoveredTeacher(id);
      }
    } else {
      setSelectedTeacher(id);
    }
  };

  return (
    <TeachersContainer id="teachers">
      <Box
        onClick={() => isMobile && setHoveredTeacher(null)}
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          opacity: isDimmed ? 1 : 0,
          pointerEvents: isDimmed ? "auto" : "none",
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* 🟢 'm' + viewport once pour tuer l'observer après animation */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          animate={{ opacity: isDimmed ? 0.3 : 1 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              color: "primary.main",
              fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
            }}
          >
            NOS PROFESSEURS
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 4,
              color: "text.secondary",
            }}
          >
            Rencontrez notre équipe passionnée et diplômée, prête à vous
            accompagner dans votre parcours artistique.
          </Typography>
        </m.div>
      </Container>

      <TeachersCircleContainer
        sx={{
          zIndex: 2,
          [theme.breakpoints.down("md")]: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 35,
            justifyItems: "center",
            position: "relative",
            height: "100%",
            paddingBottom: 27,
          },
          [theme.breakpoints.up("md")]: {
            position: "relative",
            width: "100%",
            height: "60vh",
            minHeight: "400px",
            maxHeight: "800px",
          },
        }}
      >
        {teachers.map((teacher, index) => {
          const { x, y } = teacher.position;

          const isHovered = hoveredTeacher === teacher.id;
          const isOtherHovered = isAnyHovered && !isHovered;

          const centerX = 50;
          const maxTilt = 25;
          const halfSpan = 100;
          const rawTilt = -maxTilt * ((x - centerX) / halfSpan);
          const tilt = Math.max(-maxTilt, Math.min(maxTilt, rawTilt));

          return (
            <m.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{
                zIndex: isHovered && !isModalOpen ? 10 : 2,
                ...(!isMobile
                  ? {
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }
                  : {
                      position: "relative",
                      width: "100%",
                      maxWidth: "300px",
                    }),
              }}
              onClick={() => handleCardClick(teacher.id)}
              onMouseEnter={() => canHover && setHoveredTeacher(teacher.id)}
              onMouseLeave={() => canHover && setHoveredTeacher(null)}
              whileHover={canHover ? { scale: 1.05 } : {}}
            >
              {!isMobile && (
                <AnimatePresence>
                  {isHovered && !isModalOpen && (
                    <Spotlight
                      style={{
                        x: "-5%",
                        rotate: tilt,
                        transformOrigin: "50% 100%",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              )}

              <TeacherCard
                sx={{
                  opacity: isModalOpen ? 0.2 : isOtherHovered ? 0.35 : 1,
                  transition: "opacity 0.3s ease",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    maxWidth: "250px",
                    height: "auto",
                    aspectRatio: "1/1",
                  },
                }}
              >
                {/* 🟢 Chargement lazy + décodage asynchrone des médias */}
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  loading="lazy"
                  decoding="async"
                />

                <TeacherCardContent>
                  <Typography variant="h6">{teacher.name}</Typography>
                  <Typography variant="caption">{teacher.role}</Typography>
                </TeacherCardContent>
              </TeacherCard>
            </m.div>
          );
        })}

        <Modal
          open={selectedTeacher !== null}
          disableScrollLock
          onClose={() => {
            setSelectedTeacher(null);
            if (isMobile) setHoveredTeacher(null);
          }}
          slotProps={{
            backdrop: {
              sx: { backgroundColor: "transparent" },
            },
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
          }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {activeTeacher && (
              <ModalCard
                sx={{
                  [theme.breakpoints.up("md")]: {
                    maxWidth: "600px",
                  },
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "90vw",
                    margin: 2,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <ModalImage>
                    <img
                      src={activeTeacher.image}
                      alt={activeTeacher.name}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </ModalImage>
                  <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                    {activeTeacher.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "primary.main", mb: 2 }}
                  >
                    {activeTeacher.role}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: "divider" }} />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {activeTeacher.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      background:
                        "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
                    }}
                    onClick={() => {
                      setSelectedTeacher(null);
                      if (isMobile) setHoveredTeacher(null);
                    }}
                  >
                    Fermer
                  </Button>
                </CardContent>
              </ModalCard>
            )}
          </m.div>
        </Modal>
      </TeachersCircleContainer>
    </TeachersContainer>
  );
};
