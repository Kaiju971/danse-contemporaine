import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { AboutContainer, StatsCard, StatNumber, StatLabel, } from "./about.styled";
import { Box, Container, Grid, Typography } from "@mui/material";
const stats = [
    { number: "10+", label: "Années d'expérience" },
    { number: "50+", label: "Élèves formés" },
    { number: "5", label: "Professeurs diplômés" },
    { number: "100%", label: "Passion" },
];
export const About = () => {
    return (_jsx(AboutContainer, { id: "about", children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 10, sx: {
                    alignItems: "center",
                }, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs(Typography, { variant: "h3", gutterBottom: true, children: ["L'\u00C9COLE DE DANSE", " ", _jsx(Box, { component: "span", sx: { color: "primary.main" }, children: "CONTEMPORAINE" })] }), _jsx(Typography, { variant: "body1", sx: { mb: 2 }, children: "Fond\u00E9e par Pascale, notre \u00E9cole est un lieu o\u00F9 la danse contemporaine devient accessible \u00E0 toutes et \u00E0 tous." }), _jsx(Typography, { variant: "body1", children: "Nous croyons en une approche bienveillante et \u00E9nergique, o\u00F9 chaque \u00E9l\u00E8ve peut d\u00E9velopper sa confiance en soi, sa cr\u00E9ativit\u00E9 et son expression corporelle dans une ambiance chaleureuse et inspirante." })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true }, children: _jsx(Grid, { container: true, spacing: 2, children: stats.map((stat, index) => (_jsx(Grid, { size: 6, children: _jsxs(StatsCard, { children: [_jsx(StatNumber, { children: stat.number }), _jsx(StatLabel, { children: stat.label })] }) }, index))) }) }) })] }) }) }));
};
