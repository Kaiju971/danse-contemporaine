// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   TeachersContainer,
//   TeachersCircleContainer,
//   TeacherCard,
//   TeacherCardContent,
//   Spotlight,
//   ModalCard,
//   ModalImage,
// } from "./teachers.styled";
// import {
//   Container,
//   Typography,
//   Box,
//   Modal,
//   Button,
//   CardContent,
//   Divider,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import image1 from "../../assets/image/Ellipse 2.webp";
// import image2 from "../../assets/image/Ellipse 3.webp";
// import image3 from "../../assets/image/Ellipse 4.webp";

// const teachers = [
//   {
//     id: 1,
//     name: "Wendy",
//     role: "Trésorière – Le lien entre idées et organisation",
//     description:
//       "Wendy transforme nos idées en actions concrètes. Son écoute attentive et sa précision font rayonner notre vision.",
//     image: image2,
//     position: { x: 62, y: 18 },
//   },
//   {
//     id: 2,
//     name: "Pascale",
//     role: "Fondatrice & Professeure",
//     description:
//       "Fondée par Pascale, Danse contemporaine est une école pleine d'énergie et de bienveillance.",
//     image: image3,
//     position: { x: 43, y: 60 },
//   },
//   {
//     id: 3,
//     name: "Anne-Sophie",
//     role: "Professeure",
//     description:
//       "Spécialiste des cours pour enfants, Anne-Sophie allie créativité et pédagogie pour éveiller la passion de la danse.",
//     image: image1,
//     position: { x: 20, y: 18 },
//   },
// ];

// export const Teachers = () => {
//   const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
//   const [hoveredTeacher, setHoveredTeacher] = useState<number | null>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // ✅ Détecte mobile/tablette

//   const activeTeacher = teachers.find((t) => t.id === selectedTeacher);

//   return (
//     <TeachersContainer id="teachers">
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             gutterBottom
//             sx={{
//               color: "primary.main",
//               fontSize: { xs: "2rem", md: "3rem", lg: "4rem" }, // ✅ Taille responsive
//               // Si une carte est survolée, on réduit l'opacité et on ajoute un léger flou
//               opacity: hoveredTeacher !== null ? 0.3 : 1,
//               filter: hoveredTeacher !== null ? "blur(1px)" : "none",
//               transition: "opacity 0.3s ease, filter 0.3s ease",
//             }}
//           >
//             NOS PROFESSEURS
//           </Typography>
//           <Typography
//             variant="body1"
//             align="center"
//             sx={{
//               mb: 4,
//               color: "text.secondary",
//               opacity: hoveredTeacher !== null ? 0.3 : 1,
//               transition: "opacity 0.3s ease",
//             }}
//           >
//             Rencontrez notre équipe passionnée et diplômée, prête à vous
//             accompagner dans votre parcours artistique.
//           </Typography>
//         </motion.div>
//       </Container>

//       {/* ✅ Layout différent pour mobile/tablette */}
//       <TeachersCircleContainer
//         sx={{
//           // Sur mobile : affiche en grille
//           [theme.breakpoints.down("md")]: {
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
//             gap: 35,
//             justifyItems: "center",
//             position: "relative",
//             height: "100%",
//             paddingBottom: 27,
//             marginLeft: "1.3rem",
//           },
//           // Sur desktop : garde le cercle
//           [theme.breakpoints.up("md")]: {
//             position: "absolute",
//             width: "100%",
//             height: "60vh",
//             minHeight: "400px",
//             maxHeight: "800px",
//           },
//         }}
//       >
//         {teachers.map((teacher, index) => {
//           const { x, y } = teacher.position;

//           // Détecte si la carte actuelle est survolée ou si une AUTRE carte est survolée
//           const isHovered = hoveredTeacher === teacher.id;
//           const isAnyHovered = hoveredTeacher !== null;
//           const isOtherHovered = isAnyHovered && !isHovered;

//           // Calcul du tilt (uniquement pour desktop)
//           const centerX = 50;
//           const maxTilt = 25;
//           const halfSpan = 100;
//           const rawTilt = -maxTilt * ((x - centerX) / halfSpan);
//           const tilt = Math.max(-maxTilt, Math.min(maxTilt, rawTilt));

//           return (
//             <motion.div
//               key={teacher.id}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               style={{
//                 zIndex: isHovered ? 10 : 1, // Passe la carte active au premier plan
//                 // Positionnement différent selon mobile/desktop
//                 ...(!isMobile
//                   ? {
//                       position: "absolute",
//                       left: `${x}%`,
//                       top: `${y}%`,
//                       transform: "translate(-50%, -50%)",
//                     }
//                   : {
//                       position: "relative",
//                       width: "100%",
//                       maxWidth: "300px",
//                     }),
//               }}
//               onClick={() => setSelectedTeacher(teacher.id)}
//               onMouseEnter={() => !isMobile && setHoveredTeacher(teacher.id)} // ✅ Désactive hover sur mobile
//               onMouseLeave={() => !isMobile && setHoveredTeacher(null)}
//               whileHover={!isMobile ? { scale: 1.05 } : {}} // ✅ Désactive hover sur mobile
//             >
//               {/* Spotlight uniquement sur desktop */}
//               {!isMobile && (
//                 <AnimatePresence>
//                   {isHovered && (
//                     <Spotlight
//                       style={{
//                         x: "-5%",
//                         rotate: tilt,
//                         transformOrigin: "50% 100%",
//                       }}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   )}
//                 </AnimatePresence>
//               )}

//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   background: (theme) =>
//                     theme.palette.mode === "dark"
//                       ? "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.05) 360%)"
//                       : "conic-gradient(from 0deg, transparent 0%, rgba(0,17,51,0.05) 360%)",
//                   filter: "blur(20px)",
//                   zIndex: -1,
//                   opacity: isOtherHovered ? 0 : 1,
//                   transition: "opacity 0.3s ease",
//                   [theme.breakpoints.down("md")]: {
//                     display: "none",
//                   },
//                 }}
//               />
//               <TeacherCard
//                 sx={{
//                   // Si une AUTRE vignette est survolée : assombrit et désature cette vignette
//                   opacity: isOtherHovered ? 0.35 : 1,
//                   filter: isOtherHovered
//                     ? "brightness(0.6) grayscale(30%)"
//                     : "none",
//                   transition: "all 0.3s ease",
//                   [theme.breakpoints.down("md")]: {
//                     width: "100%",
//                     maxWidth: "250px",
//                     height: "auto",
//                     aspectRatio: "1/1",
//                   },
//                 }}
//               >
//                 <img src={teacher.image} alt={teacher.name} />

//                 <TeacherCardContent>
//                   <Typography variant="h6">{teacher.name}</Typography>
//                   <Typography variant="caption">{teacher.role}</Typography>
//                 </TeacherCardContent>
//               </TeacherCard>
//             </motion.div>
//           );
//         })}

//         {/* Modal (inchangée, déjà responsive) */}
//         <Modal
//           open={selectedTeacher !== null}
//           onClose={() => setSelectedTeacher(null)}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             {activeTeacher && (
//               <ModalCard
//                 sx={{
//                   // Modal plus large sur desktop
//                   [theme.breakpoints.up("md")]: {
//                     maxWidth: "600px",
//                   },
//                   [theme.breakpoints.down("md")]: {
//                     maxWidth: "90vw",
//                     margin: 2,
//                   },
//                 }}
//               >
//                 <CardContent sx={{ textAlign: "center", p: 4 }}>
//                   <ModalImage>
//                     <img
//                       src={activeTeacher.image}
//                       alt={activeTeacher.name}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         borderRadius: "50%",
//                       }}
//                     />
//                   </ModalImage>
//                   <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
//                     {activeTeacher.name}
//                   </Typography>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       color: "primary.main",
//                       mb: 2,
//                     }}
//                   >
//                     {activeTeacher.role}
//                   </Typography>
//                   <Divider sx={{ my: 2, borderColor: "divider" }} />
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "text.secondary",
//                     }}
//                   >
//                     {activeTeacher.description}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       mt: 3,
//                       background:
//                         "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
//                     }}
//                     onClick={() => setSelectedTeacher(null)}
//                   >
//                     Fermer
//                   </Button>
//                 </CardContent>
//               </ModalCard>
//             )}
//           </motion.div>
//         </Modal>
//       </TeachersCircleContainer>
//     </TeachersContainer>
//   );
// };
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import image2 from "../../assets/image/Ellipse 3.webp";
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

  // États d'assombrissement
  const isModalOpen = selectedTeacher !== null;
  const isAnyHovered = hoveredTeacher !== null;
  const isDimmed = isAnyHovered || isModalOpen;

  const activeTeacher = teachers.find((t) => t.id === selectedTeacher);

  return (
    <TeachersContainer id="teachers">
      {/* Overlay sombre unifié pour le survol ET la modal */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          opacity: isDimmed ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.4s ease",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{
            opacity: isDimmed ? 0.25 : 1,
            filter: isDimmed ? "blur(2px)" : "blur(0px)",
          }}
          style={{ transition: "all 0.4s ease" }}
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
        </motion.div>
      </Container>

      <TeachersCircleContainer
        sx={{
          zIndex: 2,
          // Layout responsive
          [theme.breakpoints.down("md")]: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 35,
            justifyItems: "center",
            position: "relative",
            height: "100%",
            paddingBottom: 27,
            marginLeft: "1.3rem",
          },
          [theme.breakpoints.up("md")]: {
            position: "absolute",
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

          // Calcul du tilt pour desktop
          const centerX = 50;
          const maxTilt = 25;
          const halfSpan = 100;
          const rawTilt = -maxTilt * ((x - centerX) / halfSpan);
          const tilt = Math.max(-maxTilt, Math.min(maxTilt, rawTilt));

          return (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
              onClick={() => setSelectedTeacher(teacher.id)}
              onMouseEnter={() => !isMobile && setHoveredTeacher(teacher.id)}
              onMouseLeave={() => !isMobile && setHoveredTeacher(null)}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              {/* Spotlight uniquement sur desktop si la modal n'est pas ouverte */}
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
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>
              )}

              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.05) 360%)"
                      : "conic-gradient(from 0deg, transparent 0%, rgba(0,17,51,0.05) 360%)",
                  filter: "blur(20px)",
                  zIndex: -1,
                  opacity: isDimmed ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              />
              <TeacherCard
                sx={{
                  // Gestion de l'opacité : tout s'estompe si modal ouverte ou autre carte survolée
                  opacity: isModalOpen ? 0.2 : isOtherHovered ? 0.35 : 1,
                  filter:
                    isModalOpen || isOtherHovered
                      ? "brightness(0.6) grayscale(20%)"
                      : "none",
                  transition: "all 0.4s ease",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    maxWidth: "250px",
                    height: "auto",
                    aspectRatio: "1/1",
                  },
                }}
              >
                <img src={teacher.image} alt={teacher.name} />

                <TeacherCardContent>
                  <Typography variant="h6">{teacher.name}</Typography>
                  <Typography variant="caption">{teacher.role}</Typography>
                </TeacherCardContent>
              </TeacherCard>
            </motion.div>
          );
        })}

        {/* Modal avec fond natif transparent pour laisser notre overlay géré */}
        <Modal
          open={selectedTeacher !== null}
          onClose={() => setSelectedTeacher(null)}
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: "transparent",
              },
            },
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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
                    sx={{
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    {activeTeacher.role}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: "divider" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
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