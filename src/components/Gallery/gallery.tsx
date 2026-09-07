// import { useState } from "react";
// import { m, AnimatePresence } from "framer-motion";
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
//   useMediaQuery,
//   useTheme,
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

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const canHover = useMediaQuery("(hover: hover)");

//   const isModalOpen = selectedImage !== null;
//   const isAnyHovered = hoveredImage !== null;
//   const isDimmed = isAnyHovered || isModalOpen;

//   const handleImageClick = (index: number) => {
//     if (isMobile) {
//       if (hoveredImage === index) {
//         setSelectedImage(index);
//       } else {
//         setHoveredImage(index);
//       }
//     } else {
//       setSelectedImage(index);
//     }
//   };

//   return (
//     <GalleryContainer id="gallery" sx={{ position: "relative" }}>
//       <Box
//         onClick={() => isMobile && setHoveredImage(null)}
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.65)",
//           opacity: isDimmed ? 1 : 0,
//           pointerEvents: "none",
//           transition: "opacity 0.3s ease",
//           zIndex: 1,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
//         <m.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           animate={{ opacity: isDimmed ? 0.3 : 1 }}
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
//             sx={{ color: "text.secondary", mb: 2 }}
//           >
//             Découvrez quelques moments forts de nos cours et spectacles.
//           </Typography>
//         </m.div>

//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {galleryImages.map((image, index) => {
//             const isHovered = hoveredImage === index;
//             const isOtherHovered = isAnyHovered && !isHovered;

//             return (
//               <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
//                 <m.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{
//                     duration: 0.3,
//                     delay: Math.min(index * 0.03, 0.3),
//                   }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   whileHover={canHover ? { scale: 1.03 } : {}}
//                   onClick={() => handleImageClick(index)}
//                   onMouseEnter={() => canHover && setHoveredImage(index)}
//                   onMouseLeave={() => canHover && setHoveredImage(null)}
//                   style={{
//                     cursor: "pointer",
//                     position: "relative",
//                     zIndex: isHovered && !isModalOpen ? 10 : 2,
//                   }}
//                   // initial={{ opacity: 0, scale: 0.95 }}
//                   // whileInView={{ opacity: 1, scale: 1 }}
//                   // transition={{ duration: 0.5, delay: index * 0.05 }}
//                   // viewport={{ once: true, margin: "-50px" }}
//                   // whileHover={canHover ? { scale: 1.03 } : {}}
//                   // onClick={() => handleImageClick(index)}
//                   // onMouseEnter={() => canHover && setHoveredImage(index)}
//                   // onMouseLeave={() => canHover && setHoveredImage(null)}
//                   // style={{
//                   //   cursor: "pointer",
//                   //   position: "relative",
//                   //   zIndex: isHovered && !isModalOpen ? 10 : 2,
//                   // }}
//                 >
//                   <GalleryImageCard
//                     sx={{
//                       opacity: isModalOpen ? 0.2 : isOtherHovered ? 0.35 : 1,
//                       transition: "opacity 0.3s ease",
//                       "& .overlay": {
//                         opacity: isMobile && isHovered ? 1 : undefined,
//                       },
//                     }}
//                   >
//                     {/* 🟢 Optimisation de chargement sur CardMedia */}
//                     <CardMedia
//                       component="img"
//                       height="300"
//                       image={image}
//                       alt={`Galerie ${index + 1}`}
//                       loading="lazy"
//                       decoding="async"
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
//                 </m.div>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Container>

//       <Modal
//         open={selectedImage !== null}
//         disableScrollLock
//         onClose={() => {
//           setSelectedImage(null);
//           if (isMobile) setHoveredImage(null);
//         }}
//         slotProps={{
//           backdrop: {
//             sx: { backgroundColor: "transparent" },
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
//             <m.div
//               key="lightbox"
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.85 }}
//               transition={{ duration: 0.2 }}
//               style={{
//                 position: "relative",
//                 outline: "none",
//                 maxWidth: "90vw",
//                 maxHeight: "90vh",
//                 zIndex: 1301,
//               }}
//             >
//               <IconButton
//                 onClick={() => {
//                   setSelectedImage(null);
//                   if (isMobile) setHoveredImage(null);
//                 }}
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
//                 loading="eager"
//                 decoding="async"
//                 sx={{
//                   display: "block",
//                   maxWidth: "90vw",
//                   maxHeight: "90vh",
//                   borderRadius: 2,
//                   boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
//                 }}
//               />
//             </m.div>
//           )}
//         </AnimatePresence>
//       </Modal>
//     </GalleryContainer>
//   );
// };

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  GalleryContainer,
  GalleryImageCard,
  ImageOverlay,
} from "./gallery.styled";
import {
  Container,
  Typography,
  Box,
  Modal,
  IconButton,
  Grid,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <GalleryContainer id="gallery" sx={{ position: "relative" }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
            sx={{ color: "text.secondary", mb: 4 }}
          >
            Découvrez quelques moments forts de nos cours et spectacles.
          </Typography>
        </m.div>

        {/* ✅ On n'affiche qu'UNE SEULE image (la première) */}
        <Grid container sx={{ mt: 2, justifyContent: "center" }}>
          <Grid size={{ xs: 12, sm: 8, md: 6 }}>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <GalleryImageCard>
                <Box
                  component="img"
                  src={galleryImages[0]}
                  alt="Aperçu galerie"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <ImageOverlay className="gallery-overlay">
                  <ZoomInIcon
                    sx={{
                      fontSize: 40,
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "common.white"
                          : "primary.main",
                    }}
                  />
                  <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                    Voir la galerie ({galleryImages.length} photos)
                  </Typography>
                </ImageOverlay>
              </GalleryImageCard>
            </m.div>
          </Grid>
        </Grid>
      </Container>

      {/* ✅ MODALE LIGHTBOX : N'affiche qu'une seule image à la fois */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableScrollLock
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          zIndex: 1300,
        }}
      >
        <AnimatePresence>
          {isModalOpen && (
            <m.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "relative",
                outline: "none",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Bouton Fermer */}
              <IconButton
                onClick={handleCloseModal}
                aria-label="Fermer"
                sx={{
                  position: "absolute",
                  top: -48,
                  right: 0,
                  color: "common.white",
                  background: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Bouton Précédent */}
              <IconButton
                onClick={handlePrev}
                aria-label="Précédent"
                sx={{
                  position: "absolute",
                  left: { xs: -20, sm: -60 },
                  color: "common.white",
                  background: "rgba(0, 255, 136, 0.2)",
                  "&:hover": { background: "rgba(0, 255, 136, 0.4)" },
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 40 }} />
              </IconButton>

              {/* Image courante */}
              <Box
                component="img"
                src={galleryImages[currentIndex]}
                alt={`Galerie ${currentIndex + 1}`}
                sx={{
                  display: "block",
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  borderRadius: 2,
                  boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
                }}
              />

              {/* Bouton Suivant */}
              <IconButton
                onClick={handleNext}
                aria-label="Suivant"
                sx={{
                  position: "absolute",
                  right: { xs: -20, sm: -60 },
                  color: "common.white",
                  background: "rgba(0, 255, 136, 0.2)",
                  "&:hover": { background: "rgba(0, 255, 136, 0.4)" },
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 40 }} />
              </IconButton>

              {/* Compteur */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: -40,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "common.white",
                  fontSize: "0.9rem",
                }}
              >
                {currentIndex + 1} / {galleryImages.length}
              </Typography>
            </m.div>
          )}
        </AnimatePresence>
      </Modal>
    </GalleryContainer>
  );
};