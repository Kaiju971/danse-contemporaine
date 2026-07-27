import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import heroImage from "../../assets/image/image1Gallery.png";
export const Home = () => {
    return (_jsxs(Box, { id: "home", sx: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "white",
            overflow: "hidden",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }, children: [_jsx(Box, { sx: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0, 17, 51, 0.094) 0%, rgba(0, 8, 34, 0.725) 100%)",
                    zIndex: 0,
                } }), _jsx(Box, { sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 900,
                    height: 900,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,255,136,0.1) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    zIndex: 1,
                    pointerEvents: "none",
                } }), _jsx(Container, { maxWidth: "lg", sx: { position: "relative", zIndex: 2 }, children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(Typography, { variant: "h1", align: "center", gutterBottom: true, sx: { fontSize: { xs: "3rem", md: "5rem" } }, children: "COURS DE DANSE" }), _jsx(Typography, { variant: "h1", align: "center", sx: { color: "primary.main", fontSize: { xs: "4rem", md: "6rem" } }, children: "CONTEMPORAINE" }), _jsx(Typography, { variant: "h5", align: "center", sx: {
                                color: "primary.main",
                                mt: 4,
                                mb: 6,
                                maxWidth: 800,
                                mx: "auto",
                            }, children: "Danse contemporaine est accessible \u00E0 toutes. Fond\u00E9e par Pascale, c'est une \u00E9cole pleine d'\u00E9nergie et de bienveillance." }), _jsxs(Box, { sx: {
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }, children: [_jsx(Button, { variant: "contained", sx: {
                                        background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
                                        color: "black",
                                        fontWeight: 700,
                                        padding: "12px 24px",
                                        borderRadius: 4,
                                    }, onClick: () => document
                                        .getElementById("courses")
                                        ?.scrollIntoView({ behavior: "smooth" }), children: "D\u00C9COUVRIR NOS COURS" }), _jsx(Button, { variant: "outlined", sx: { color: "white", borderColor: "rgba(255,255,255,0.5)" }, onClick: () => document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" }), children: "NOUS CONTACTER" })] })] }) }), _jsx(Box, { sx: {
                    position: "absolute",
                    bottom: 30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    cursor: "pointer",
                    zIndex: 2,
                    animation: "bounce 2s infinite",
                    "@keyframes bounce": {
                        "0%, 20%, 50%, 80%, 100%": { transform: "translate(-50%, 0)" },
                        "40%": { transform: "translate(-50%, -10px)" },
                        "60%": { transform: "translate(-50%, -5px)" },
                    },
                }, onClick: () => document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" }), children: _jsx(ArrowDownwardIcon, { sx: { color: "rgba(255,255,255,0.7)" } }) })] }));
};
