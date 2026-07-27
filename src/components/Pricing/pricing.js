import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { PricingContainer, PricingCard, Price, PricingButton, } from "./pricing.styled";
import { Container, Grid, Typography, Divider } from "@mui/material";
const pricingOptions = [
    {
        id: 1,
        type: "Cours à l'unité",
        price: "15€",
        detail: "Par cours",
        isFeatured: false,
    },
    {
        id: 2,
        type: "Abonnement Mensuel",
        price: "50€",
        detail: "4 cours/mois",
        isFeatured: true,
    },
    {
        id: 3,
        type: "Abonnement Annuel",
        price: "450€",
        detail: "Économie de 10%",
        isFeatured: false,
    },
    {
        id: 4,
        type: "Cours Enfant",
        price: "12€",
        detail: "Par cours",
        isFeatured: false,
    },
];
export const Pricing = () => {
    return (_jsx(PricingContainer, { id: "pricing", children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "TARIFS" }), _jsx(Typography, { variant: "body1", align: "center", sx: { mb: 2, color: "text.secondary" }, children: "Des formules adapt\u00E9es \u00E0 tous les budgets et \u00E0 tous les niveaux." })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 2 }, children: pricingOptions.map((option, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -5 }, children: _jsxs(PricingCard, { isFeatured: option.isFeatured, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, sx: { fontSize: "2rem" }, children: option.type }), _jsx(Divider, { sx: { my: 2, background: "rgba(255,255,255,0.2)" } }), _jsx(Price, { children: option.price }), _jsx(Typography, { variant: "body2", sx: {
                                            color: "text.secondary",
                                            mb: 2,
                                        }, children: "/mois" }), _jsx(Typography, { variant: "body2", sx: { mb: 2, color: "text.secondary" }, children: option.detail }), _jsx(PricingButton, { fullWidth: true, variant: "contained", onClick: () => document.getElementById("contact")?.scrollIntoView({
                                            behavior: "smooth",
                                        }), children: "S'inscrire" })] }) }) }, option.id))) })] }) }));
};
