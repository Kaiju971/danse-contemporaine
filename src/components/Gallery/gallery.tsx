// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   GalleryContainer,
//   GalleryImageCard,
//   ImageOverlay,
// } from "./gallery.styled";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   CardMedia,
//   Modal,
//   IconButton,
// } from "@mui/material";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import CloseIcon from "@mui/icons-material/Close";
// import image1 from "../../assets/image/image1Gallery.webp";
// import image2 from "../../assets/image/image2Gallery.webp";
// import image3 from "../../assets/image/image3Gallery.webp";
// import image4 from "../../assets/image/image4Gallery.webp";
// import image5 from "../../assets/image/image5Gallery.webp";
// import image6 from "../../assets/image/image6Gallery.webp";
// import image7 from "../../assets/image/image7Gallery.webp";
// import image8 from "../../assets/image/image8Gallery.webp";
// import image9 from "../../assets/image/image9Gallery.webp";
// import image10 from "../../assets/image/image10Gallery.webp";

// const galleryImages = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
//   image10,
// ];

// export const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [hoveredImage, setHoveredImage] = useState<number | null>(null);

//   // États d'assombrissement identiques à Teachers
//   const isModalOpen = selectedImage !== null;
//   const isAnyHovered = hoveredImage !== null;
//   const isDimmed = isAnyHovered || isModalOpen;

//   return (
//     <GalleryContainer id="gallery" sx={{ position: "relative" }}>
//       {/* Overlay sombre unifié pour le survol ET la modal */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.729)",
//           opacity: isDimmed ? 1 : 0,
//           pointerEvents: "none",
//           transition: "opacity 0.4s ease",
//           zIndex: 1,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
//         {/* En-tête : s'estompe et se floute légèrement au survol / ouverture de modal */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           animate={{
//             opacity: isDimmed ? 0.25 : 1,
//             filter: isDimmed ? "blur(2px)" : "blur(0px)",
//           }}
//           style={{ transition: "all 0.4s ease" }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             gutterBottom
//             sx={{
//               color: "primary.main",
//               fontSize: { xxs: "0.5rem", xs: "2rem", md: "6rem" },
//             }}
//           >
//             GALERIE
//           </Typography>
//           <Typography
//             variant="body1"
//             align="center"
//             sx={{
//               color: "text.secondary",
//               mb: 2,
//             }}
//           >
//             Découvrez quelques moments forts de nos cours et spectacles.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {galleryImages.map((image, index) => {
//             const isHovered = hoveredImage === index;
//             const isOtherHovered = isAnyHovered && !isHovered;

//             return (
//               <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   whileHover={{ scale: 1.03 }}
//                   onClick={() => setSelectedImage(index)}
//                   onMouseEnter={() => setHoveredImage(index)}
//                   onMouseLeave={() => setHoveredImage(null)}
//                   style={{
//                     cursor: "pointer",
//                     position: "relative",
//                     // Fait passer l'image survolée au-dessus de l'overlay sombre (zIndex: 1)
//                     zIndex: isHovered && !isModalOpen ? 10 : 2,
//                   }}
//                 >
//                   <GalleryImageCard
//                     sx={{
//                       // Estompe et désature les cartes non sélectionnées/survolées
//                       opacity: isModalOpen ? 0.2 : isOtherHovered ? 0.35 : 1,
//                       filter:
//                         isModalOpen || isOtherHovered
//                           ? "brightness(0.6) grayscale(20%)"
//                           : "none",
//                       transition: "all 0.4s ease",
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       height="300"
//                       image={image}
//                       alt={`Galerie ${index + 1}`}
//                       sx={{ objectFit: "cover" }}
//                     />
//                     <ImageOverlay className="overlay">
//                       <ZoomInIcon
//                         sx={{
//                           fontSize: 40,
//                           color: (theme) =>
//                             theme.palette.mode === "dark"
//                               ? "common.white"
//                               : "primary.main",
//                         }}
//                       />
//                     </ImageOverlay>
//                   </GalleryImageCard>
//                 </motion.div>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Container>

//       {/* Modal Lightbox avec fond natif transparent */}
//       <Modal
//         open={selectedImage !== null}
//         onClose={() => setSelectedImage(null)}
//         slotProps={{
//           backdrop: {
//             sx: {
//               backgroundColor: "transparent",
//             },
//           },
//         }}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           p: 2,
//           zIndex: 1300,
//         }}
//       >
//         <AnimatePresence>
//           {selectedImage !== null && (
//             <motion.div
//               key="lightbox"
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.85 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 position: "relative",
//                 outline: "none",
//                 maxWidth: "90vw",
//                 maxHeight: "90vh",
//                 zIndex: 1301,
//               }}
//             >
//               <IconButton
//                 onClick={() => setSelectedImage(null)}
//                 aria-label="Fermer"
//                 sx={{
//                   position: "absolute",
//                   top: -48,
//                   right: 0,
//                   color: (theme) =>
//                     theme.palette.mode === "dark"
//                       ? "common.white"
//                       : "primary.main",
//                   background: "rgba(255, 255, 255, 0.1)",
//                   "&:hover": {
//                     background: "rgba(255, 255, 255, 0.2)",
//                   },
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>

//               <Box
//                 component="img"
//                 src={galleryImages[selectedImage]}
//                 alt={`Galerie ${selectedImage + 1}`}
//                 sx={{
//                   display: "block",
//                   maxWidth: "90vw",
//                   maxHeight: "90vh",
//                   borderRadius: 2,
//                   boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
//                 }}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </Modal>
//     </GalleryContainer>
//   );
// };
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GalleryContainer,
  GalleryImageCard,
  ImageOverlay,
} from "./gallery.styled";
import {
  Container,
  Grid,
  Typography,
  Box,
  CardMedia,
  Modal,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../../assets/image/image1Gallery.webp";
import image2 from "../../assets/image/image2Gallery.webp";
import image3 from "../../assets/image/image3Gallery.webp";
import image4 from "../../assets/image/image4Gallery.webp";
import image5 from "../../assets/image/image5Gallery.webp";
import image6 from "../../assets/image/image6Gallery.webp";
import image7 from "../../assets/image/image7Gallery.webp";
import image8 from "../../assets/image/image8Gallery.webp";
import image9 from "../../assets/image/image9Gallery.webp";
import image10 from "../../assets/image/image10Gallery.webp";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isModalOpen = selectedImage !== null;
  const isAnyHovered = hoveredImage !== null;
  const isDimmed = isAnyHovered || isModalOpen;

  const handleImageClick = (index: number) => {
    if (isMobile) {
      if (hoveredImage === index) {
        // 2ème appui : Ouvre la lightbox
        setSelectedImage(index);
      } else {
        // 1er appui : Active le focus
        setHoveredImage(index);
      }
    } else {
      // Sur Desktop : Ouverture directe de la lightbox
      setSelectedImage(index);
    }
  };

  return (
    <GalleryContainer id="gallery" sx={{ position: "relative" }}>
      {/* Overlay sombre global */}
      <Box
        onClick={() => isMobile && setHoveredImage(null)}
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          opacity: isDimmed ? 1 : 0,
          pointerEvents: isDimmed ? "auto" : "none",
          transition: "opacity 0.4s ease",
          zIndex: 1,
          cursor: isMobile && isAnyHovered ? "pointer" : "default",
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
              fontSize: { xxs: "0.5rem", xs: "2rem", md: "6rem" },
            }}
          >
            GALERIE
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Découvrez quelques moments forts de nos cours et spectacles.
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {galleryImages.map((image, index) => {
            const isHovered = hoveredImage === index;
            const isOtherHovered = isAnyHovered && !isHovered;

            return (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={!isMobile ? { scale: 1.03 } : {}}
                  onClick={() => handleImageClick(index)}
                  onMouseEnter={() => !isMobile && setHoveredImage(index)}
                  onMouseLeave={() => !isMobile && setHoveredImage(null)}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: isHovered && !isModalOpen ? 10 : 2,
                  }}
                >
                  <GalleryImageCard
                    sx={{
                      opacity: isModalOpen ? 0.2 : isOtherHovered ? 0.35 : 1,
                      filter:
                        isModalOpen || isOtherHovered
                          ? "brightness(0.6) grayscale(20%)"
                          : "none",
                      transition: "all 0.4s ease",
                      // Sur mobile, affiche l'overlay (icône de loupe) dès que la carte est en focus
                      "& .overlay": {
                        opacity: isMobile && isHovered ? 1 : undefined,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={image}
                      alt={`Galerie ${index + 1}`}
                      sx={{ objectFit: "cover" }}
                    />
                    <ImageOverlay className="overlay">
                      <ZoomInIcon
                        sx={{
                          fontSize: 40,
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "common.white"
                              : "primary.main",
                        }}
                      />
                    </ImageOverlay>
                  </GalleryImageCard>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Modal
        open={selectedImage !== null}
        onClose={() => {
          setSelectedImage(null);
          if (isMobile) setHoveredImage(null);
        }}
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
          p: 2,
          zIndex: 1300,
        }}
      >
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                outline: "none",
                maxWidth: "90vw",
                maxHeight: "90vh",
                zIndex: 1301,
              }}
            >
              <IconButton
                onClick={() => {
                  setSelectedImage(null);
                  if (isMobile) setHoveredImage(null);
                }}
                aria-label="Fermer"
                sx={{
                  position: "absolute",
                  top: -48,
                  right: 0,
                  color: (theme) =>
                    theme.palette.mode === "dark"
                      ? "common.white"
                      : "primary.main",
                  background: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                component="img"
                src={galleryImages[selectedImage]}
                alt={`Galerie ${selectedImage + 1}`}
                sx={{
                  display: "block",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  borderRadius: 2,
                  boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </GalleryContainer>
  );
};