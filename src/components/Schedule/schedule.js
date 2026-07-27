import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(ScheduleContainer, { id: "schedule", children: _jsxs(Container, { maxWidth: "md", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "PLANNING" }), _jsx(Typography, { variant: "body1", align: "center", sx: { mb: 2, color: "text.secondary" }, children: "Retrouvez nos horaires de cours pour la saison en cours." })] }), _jsx(Box, { sx: { mt: 4 }, children: schedule.map((item, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, viewport: { once: true }, children: _jsxs(ScheduleItem, { children: [_jsx(DayCircle, { children: _jsx(Typography, { variant: "h6", children: item.day.charAt(0) }) }), _jsxs(Box, { sx: { textAlign: "center" }, children: [_jsx(Typography, { variant: "subtitle1", sx: {
                                                fontWeight: 600,
                                            }, children: item.day }), _jsx(Typography, { variant: "body2", sx: {
                                                color: "text.secondary",
                                            }, children: item.time })] }), _jsx(Typography, { variant: "body2", sx: {
                                        color: "text.secondary",
                                    }, children: item.course }), _jsx(Box, { component: "button", sx: {
                                        color: "primary.main",
                                        fontWeight: 600,
                                        ml: 2,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }, onClick: () => document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                    }), children: "S'inscrire" })] }) }, index))) })] }) }));
};
