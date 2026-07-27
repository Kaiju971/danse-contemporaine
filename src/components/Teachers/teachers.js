import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TeachersContainer, TeachersCircleContainer, TeacherCard, TeacherCardContent, Spotlight, ModalCard, ModalImage, } from "./teachers.styled";
import { Container, Typography, Box, Modal, Button, CardContent, Divider, } from "@mui/material";
import image1 from "../../assets/image/Ellipse 2.png";
import image2 from "../../assets/image/Ellipse 3.png";
import image3 from "../../assets/image/Ellipse 4.png";
const teachers = [
    {
        id: 1,
        name: "Wendy",
        role: "Trésorière – Le lien entre idées et organisation",
        description: "Wendy transforme nos idées en actions concrètes. Son écoute attentive et sa précision font rayonner notre vision.",
        image: image2,
        position: { x: 62, y: 18 }, // en haut à droite
    },
    {
        id: 2,
        name: "Pascale",
        role: "Fondatrice & Professeure",
        description: "Fondée par Pascale, Danse contemporaine est une école pleine d'énergie et de bienveillance.",
        image: image3,
        position: { x: 42, y: 60 }, // au milieu, en bas
    },
    {
        id: 3,
        name: "Anne-Sophie",
        role: "Professeure",
        description: "Spécialiste des cours pour enfants, Anne-Sophie allie créativité et pédagogie pour éveiller la passion de la danse.",
        image: image1,
        position: { x: 20, y: 18 }, // en haut à gauche
    },
];
export const Teachers = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [hoveredTeacher, setHoveredTeacher] = useState(null);
    // On récupère le prof sélectionné une seule fois, au lieu de refaire
    // teachers.find(...) à chaque endroit où on en a besoin.
    const activeTeacher = teachers.find((t) => t.id === selectedTeacher);
    return (_jsxs(TeachersContainer, { id: "teachers", children: [_jsx(Container, { maxWidth: "lg", children: _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "NOS PROFESSEURS" }), _jsx(Typography, { variant: "body1", align: "center", sx: { mb: 2, color: "text.secondary" }, children: "Rencontrez notre \u00E9quipe passionn\u00E9e et dipl\u00F4m\u00E9e, pr\u00EAte \u00E0 vous accompagner dans votre parcours artistique." })] }) }), _jsxs(TeachersCircleContainer, { children: [teachers.map((teacher, index) => {
                        const { x, y } = teacher.position;
                        // Inclinaison du faisceau selon la position horizontale :
                        // penche vers la droite si la carte est à gauche du centre
                        // (50%), vers la gauche si elle est à droite, et reste
                        // parfaitement droit si elle est centrée (cas de Pascale).
                        const centerX = 50;
                        const maxTilt = 25;
                        const halfSpan = 100; // écart horizontal max attendu par rapport au centre
                        const rawTilt = -maxTilt * ((x - centerX) / halfSpan);
                        const tilt = Math.max(-maxTilt, Math.min(maxTilt, rawTilt));
                        return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: index * 0.2 }, viewport: { once: true }, style: {
                                position: "absolute",
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: "translate(-50%, -50%)",
                            }, onClick: () => setSelectedTeacher(teacher.id), onMouseEnter: () => setHoveredTeacher(teacher.id), onMouseLeave: () => setHoveredTeacher(null), whileHover: { scale: 1.05 }, children: [_jsx(AnimatePresence, { children: hoveredTeacher === teacher.id && (_jsx(Spotlight, { style: {
                                            x: "-20%",
                                            rotate: tilt,
                                            transformOrigin: "50% 100%",
                                        }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.4 } })) }), _jsx(Box, { sx: {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        // Voile blanc en dark (ressort sur fond navy), voile
                                        // navy très léger en light (sinon invisible sur blanc).
                                        background: (theme) => theme.palette.mode === "dark"
                                            ? "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.05) 360%)"
                                            : "conic-gradient(from 0deg, transparent 0%, rgba(0,17,51,0.05) 360%)",
                                        filter: "blur(20px)",
                                        zIndex: -1,
                                    } }), _jsxs(TeacherCard, { children: [_jsx("img", { src: teacher.image, alt: teacher.name, style: { width: "100%", height: "100%", objectFit: "cover" } }), _jsxs(TeacherCardContent, { children: [_jsx(Typography, { variant: "h6", children: teacher.name }), _jsx(Typography, { variant: "caption", children: teacher.role })] })] })] }, teacher.id));
                    }), _jsx(Modal, { open: selectedTeacher !== null, onClose: () => setSelectedTeacher(null), sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }, children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, children: activeTeacher && (_jsx(ModalCard, { children: _jsxs(CardContent, { sx: { textAlign: "center", p: 4 }, children: [_jsx(ModalImage, { children: _jsx("img", { src: activeTeacher.image, alt: activeTeacher.name, style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                } }) }), _jsx(Typography, { variant: "h4", sx: { mt: 2, mb: 1 }, children: activeTeacher.name }), _jsx(Typography, { variant: "subtitle1", sx: {
                                                color: "primary.main",
                                                mb: 2,
                                            }, children: activeTeacher.role }), _jsx(Divider, { sx: { my: 2, borderColor: "divider" } }), _jsx(Typography, { variant: "body2", sx: {
                                                color: "text.secondary",
                                            }, children: activeTeacher.description }), _jsx(Button, { variant: "contained", sx: {
                                                mt: 3,
                                                background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
                                            }, onClick: () => setSelectedTeacher(null), children: "Fermer" })] }) })) }) })] })] }));
};
