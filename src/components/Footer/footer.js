import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FooterContainer, FooterLink, FooterText } from "./footer.styled";
export const Footer = ({ onLegalNoticeClick, onPrivacyClick }) => {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 1 }, viewport: { once: true }, children: _jsxs(FooterContainer, { children: [_jsxs(FooterText, { variant: "body2", align: "center", sx: { mt: 4 }, children: ["\u00A9 ", new Date().getFullYear(), " Danse Contemporaine. Tous droits r\u00E9serv\u00E9s.", " ", _jsx(FooterLink, { href: "#", onClick: (e) => {
                                e.preventDefault();
                                onLegalNoticeClick?.(); // ✅ Appelle la fonction au clic
                            }, children: "Mentions l\u00E9gales" }), " - ", _jsx(FooterLink, { href: "#", onClick: (e) => {
                                e.preventDefault();
                                onPrivacyClick?.(); // ✅ Appelle la fonction au clic
                            }, children: "Politique de confidentialit\u00E9" })] }), _jsx(Typography, { variant: "caption", component: "p", sx: { color: "text.secondary", mt: 1 }, children: "Site con\u00E7u par SWAM Concept" })] }) }));
};
