import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { CoursesContainer, CourseCard, CourseLevelChip, } from "./courses.styled";
import { Container, Grid, Typography, CardContent, Box, Button, } from "@mui/material";
const courses = [
    {
        id: 1,
        title: "Contemporain Débutant",
        description: "Découverte des bases de la danse contemporaine pour tous les âges.",
        duration: "1h",
        level: "Débutant",
    },
    {
        id: 2,
        title: "Contemporain Intermédiaire",
        description: "Approfondissement des techniques et travail sur l'expression corporelle.",
        duration: "1h30",
        level: "Intermédiaire",
    },
    {
        id: 3,
        title: "Atelier Création",
        description: "Création chorégraphique collective pour les danseurs confirmés.",
        duration: "2h",
        level: "Avancé",
    },
];
export const Courses = () => {
    return (_jsx(CoursesContainer, { id: "courses", children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "NOS COURS" }), _jsx(Typography, { variant: "body1", align: "center", sx: { mb: 2, color: "text.primary", maxWidth: 600, mx: "auto" }, children: "D\u00E9couvrez nos cours de danse pour bouger, vous renforcer et vous faire du bien dans une ambiance bienveillante et inspirante." })] }), _jsx(Grid, { container: true, spacing: 4, sx: { mt: 4 }, children: courses.map((course, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 4 }, children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -5 }, children: _jsx(CourseCard, { children: _jsxs(CardContent, { children: [_jsx(CourseLevelChip, { label: course.level, size: "small" }), _jsx(Typography, { variant: "h3", sx: { fontSize: "50px" }, gutterBottom: true, children: course.title }), _jsx(Typography, { variant: "body2", sx: { mb: 2 }, children: course.description }), _jsxs(Box, { sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mt: 2,
                                            }, children: [_jsxs(Typography, { variant: "body2", sx: {
                                                        color: "text.secondary",
                                                    }, children: ["\u23F1 ", course.duration] }), _jsx(Button, { size: "small", sx: { color: "primary.main" }, onClick: () => document.getElementById("contact")?.scrollIntoView({
                                                        behavior: "smooth",
                                                    }), children: "S'inscrire \u2192" })] })] }) }) }) }, course.id))) })] }) }));
};
