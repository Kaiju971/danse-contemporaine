import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryContainer, GalleryImageCard, ImageOverlay, } from "./gallery.styled";
import { Container, Grid, Typography, Box, CardMedia, Modal, IconButton, } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../../assets/image/image1Gallery.png";
import image2 from "../../assets/image/image2Gallery.png";
import image3 from "../../assets/image/image3Gallery.png";
import image4 from "../../assets/image/image4Gallery.png";
import image5 from "../../assets/image/image5Gallery.png";
import image6 from "../../assets/image/image6Gallery.png";
import image7 from "../../assets/image/image7Gallery.png";
import image8 from "../../assets/image/image8Gallery.png";
import image9 from "../../assets/image/image9Gallery.png";
import image10 from "../../assets/image/image10Gallery.png";
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
    const [selectedImage, setSelectedImage] = useState(null);
    return (_jsxs(GalleryContainer, { id: "gallery", children: [_jsxs(Container, { maxWidth: "lg", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "GALERIE" }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                                    color: "text.secondary",
                                    mb: 2,
                                }, children: "D\u00E9couvrez quelques moments forts de nos cours et spectacles." })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 2 }, children: galleryImages.map((image, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 4 }, children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true, margin: "-100px" }, whileHover: { scale: 1.02 }, onClick: () => setSelectedImage(index), style: { cursor: "pointer" }, children: _jsxs(GalleryImageCard, { children: [_jsx(CardMedia, { component: "img", height: "300", image: image, alt: `Galerie ${index + 1}`, sx: { objectFit: "cover" } }), _jsx(ImageOverlay, { className: "overlay", children: _jsx(ZoomInIcon, { sx: {
                                                    fontSize: 40,
                                                    color: (theme) => theme.palette.mode === "dark"
                                                        ? "common.white"
                                                        : "primary.main",
                                                } }) })] }) }) }, index))) })] }), _jsx(Modal, { open: selectedImage !== null, onClose: () => setSelectedImage(null), sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                }, children: _jsx(AnimatePresence, { children: selectedImage !== null && (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.85 }, transition: { duration: 0.3 }, style: {
                            position: "relative",
                            outline: "none",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                        }, children: [_jsx(IconButton, { onClick: () => setSelectedImage(null), "aria-label": "Fermer", sx: {
                                    position: "absolute",
                                    top: -48,
                                    right: 0,
                                    color: (theme) => theme.palette.mode === "dark"
                                        ? "common.white"
                                        : "primary.main",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    "&:hover": {
                                        background: "rgba(255, 255, 255, 0.2)",
                                    },
                                }, children: _jsx(CloseIcon, {}) }), _jsx(Box, { component: "img", src: galleryImages[selectedImage], alt: `Galerie ${selectedImage + 1}`, sx: {
                                    display: "block",
                                    maxWidth: "90vw",
                                    maxHeight: "90vh",
                                    borderRadius: 2,
                                    boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
                                } })] }, "lightbox")) }) })] }));
};
