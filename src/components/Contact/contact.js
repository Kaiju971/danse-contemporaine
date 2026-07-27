import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { ContactContainer, InfoCard, InfoItem, InfoIcon, FormPaper, SubmitButton, } from "./contact.styled";
import { Container, Grid, Typography, TextField, Box, Link, IconButton, MenuItem, } from "@mui/material";
import { LocationOn, Phone, Email, Facebook, Instagram, YouTube, X, } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TikTok from "@mui/icons-material/MusicNote";
// import Instagram from "..//../assets/image/instagram.png"
const socialLinks = [
    { name: "Facebook", icon: _jsx(Facebook, {}), url: "#" },
    { name: "Instagram", icon: _jsx(Instagram, {}), url: "#" },
    { name: "YouTube", icon: _jsx(YouTube, {}), url: "#" },
    { name: "LinkedIn", icon: _jsx(LinkedIn, {}), url: "#" },
    { name: "X", icon: _jsx(X, {}), url: "#" },
    { name: "TikTok", icon: _jsx(TikTok, {}), url: "#" },
];
//Encode un objet en x-form-urlencoded, seul format accepté par
//Netlify Forms (pas de JSON)
const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData }),
            });
            setStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                course: "",
                message: "",
            });
        }
        catch (error) {
            setStatus("error");
        }
    };
    return (_jsx(ContactContainer, { id: "contact", children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "CONTACT" }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                                color: "text.secondary",
                                mb: 2,
                            }, children: "Une question ? Envoyez-nous un message, nous serons ravis de vous r\u00E9pondre." })] }), _jsxs(Grid, { container: true, spacing: 6, sx: { mt: 4 }, children: [_jsxs(Grid, { size: { xs: 12, md: 5 }, children: [_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: _jsxs(InfoCard, { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Nos coordonn\u00E9es" }), _jsxs(InfoItem, { children: [_jsx(InfoIcon, { children: _jsx(LocationOn, { color: "primary" }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: {
                                                                    color: "text.secondary",
                                                                }, children: "Adresse" }), _jsx(Typography, { children: "123 Rue de la Danse, 75000 Paris" })] })] }), _jsxs(InfoItem, { children: [_jsx(InfoIcon, { children: _jsx(Phone, { color: "primary" }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: {
                                                                    color: "text.secondary",
                                                                }, children: "T\u00E9l\u00E9phone" }), _jsx(Typography, { children: "+33 1 23 45 67 89" })] })] }), _jsxs(InfoItem, { children: [_jsx(InfoIcon, { children: _jsx(Email, { color: "primary" }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: {
                                                                    color: "text.secondary",
                                                                }, children: "Email" }), _jsx(Typography, { children: "contact@danse-contemporaine.fr" })] })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, children: _jsxs(InfoCard, { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "R\u00E9seaux sociaux" }), _jsx(Box, { sx: { display: "flex", gap: 2 }, children: socialLinks.map((social) => (_jsx(IconButton, { component: Link, href: social.url, sx: {
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        "&:hover": {
                                                            background: "rgba(0, 255, 136, 0.2)",
                                                        },
                                                    }, children: social.icon }, social.name))) })] }) })] }), _jsx(Grid, { size: { xs: 12, md: 7 }, children: _jsx(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: _jsxs(FormPaper, { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Pr\u00E9-inscription" }), _jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "data-netlify-honeypot": "bot-field", onSubmit: handleSubmit, children: [_jsx("input", { type: "hidden", name: "form-name", value: "contact" }), _jsx(Box, { sx: { display: "none" }, children: _jsxs("label", { children: ["Ne pas remplir si vous \u00EAtes humain :", _jsx("input", { name: "bot-field" })] }) }), _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(TextField, { fullWidth: true, label: "Nom", name: "lastName", value: formData.lastName, onChange: handleChange, required: true, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                } }) }), _jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(TextField, { fullWidth: true, label: "Pr\u00E9nom", name: "firstName", value: formData.firstName, onChange: handleChange, required: true, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { fullWidth: true, label: "Email", name: "email", type: "email", value: formData.email, onChange: handleChange, required: true, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { fullWidth: true, label: "T\u00E9l\u00E9phone", name: "phone", value: formData.phone, onChange: handleChange, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsxs(TextField, { fullWidth: true, label: "Cours souhait\u00E9", name: "course", value: formData.course, onChange: handleChange, select: true, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                }, children: [_jsx(MenuItem, { value: "", disabled: true, sx: { color: "primary.main" }, children: "S\u00E9lectionnez un cours" }), _jsx(MenuItem, { value: "Contemporain D\u00E9butant", children: "Contemporain D\u00E9butant" }), _jsx(MenuItem, { value: "Contemporain Interm\u00E9diaire", children: "Contemporain Interm\u00E9diaire" }), _jsx(MenuItem, { value: "Atelier Cr\u00E9ation", children: "Atelier Cr\u00E9ation" })] }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { fullWidth: true, label: "Message", name: "message", value: formData.message, onChange: handleChange, multiline: true, rows: 4, slotProps: {
                                                                    inputLabel: { style: { color: "primary.main" } },
                                                                }, sx: {
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "rgba(255,255,255,0.3)",
                                                                        },
                                                                        "&:hover fieldset": { borderColor: "#00ff88" },
                                                                    },
                                                                } }) }), status === "success" && (_jsx(Grid, { size: { xs: 12 }, children: _jsx(Typography, { sx: { color: "primary.main" }, children: "Merci! Votre message a bien \u00E9t\u00E9 envoy\u00E9, nous vous r\u00E9pondrons rapidement." }) })), status === "error" && (_jsx(Grid, { size: { xs: 12 }, children: _jsx(Typography, { sx: { color: "error.main" }, children: "Une erreur est survenue, merci de r\u00E9essayer dans quelques instants." }) })), _jsx(Grid, { size: { xs: 12 }, children: _jsx(SubmitButton, { fullWidth: true, type: "submit", variant: "contained", size: "large", disabled: status === "submitting", children: status === "submitting"
                                                                    ? "Envoi en cours..."
                                                                    : "Envoyer" }) })] })] })] }) }) })] })] }) }));
};
