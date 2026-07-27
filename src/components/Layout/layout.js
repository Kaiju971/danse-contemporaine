import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, Divider, Link, List, ListItem, ListItemButton, ListItemText, useMediaQuery, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeToggleButton } from "../../theme/themeToggleButton";
import { FooterText, FooterLink } from "../Footer/footer.styled";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";
import TikTok from "@mui/icons-material/MusicNote";
const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "L'école" },
    { id: "courses", label: "Nos cours" },
    { id: "teachers", label: "Professeurs" },
    { id: "gallery", label: "Galerie" },
    { id: "schedule", label: "Planning" },
    { id: "pricing", label: "Tarifs" },
    { id: "contact", label: "Contact" },
];
const socialLinks = [
    { name: "Facebook", icon: _jsx(Facebook, {}), url: "#" },
    { name: "Instagram", icon: _jsx(Instagram, {}), url: "#" },
    { name: "YouTube", icon: _jsx(YouTube, {}), url: "#" },
    { name: "LinkedIn", icon: _jsx(LinkedIn, {}), url: "#" },
    { name: "X", icon: _jsx(X, {}), url: "#" },
    { name: "TikTok", icon: _jsx(TikTok, {}), url: "#" },
];
const drawerWidth = 300;
export const Layout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    // Seuil dédié au logo : en dessous de 640px, même le mode "mobile"
    // (logo + burger seuls) n'a plus assez de place pour le texte complet.
    const isCompact = useMediaQuery(theme.breakpoints.down(640));
    const [mobileOpen, setMobileOpen] = useState(false);
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", sx: {
                    background: (theme) => theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.2)"
                        : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "none",
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }, children: _jsxs(Toolbar, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        px: { xs: 1.5, sm: 2 },
                    }, children: [_jsxs(Typography, { variant: "h6", component: "div", sx: {
                                fontWeight: 700,
                                cursor: "pointer",
                                minWidth: 0,
                                whiteSpace: "nowrap",
                                fontSize: { xs: "1rem", sm: "1.25rem" },
                            }, onClick: () => scrollToSection("home"), children: ["DANSE", " ", !isCompact && (_jsx(Box, { component: "span", sx: { color: "primary.main" }, children: "CONTEMPORAINE" }))] }), _jsxs(Box, { sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? 1 : 3,
                                flexShrink: 0,
                            }, children: [!isMobile &&
                                    navItems.map((item) => (_jsx(Typography, { sx: {
                                            cursor: "pointer",
                                            color: "text.secondary",
                                            "&:hover": { color: "primary.main" },
                                        }, onClick: () => scrollToSection(item.id), children: item.label }, item.id))), !isMobile && _jsx(ThemeToggleButton, {}), isMobile && (_jsx(IconButton, { color: "inherit", "aria-label": "Ouvrir le menu", onClick: () => setMobileOpen(true), sx: { marginRight: "1rem" }, children: _jsx(MenuIcon, {}) }))] })] }) }), _jsx(Drawer, { anchor: "right", variant: "temporary", open: mobileOpen, onClose: () => setMobileOpen(false), ModalProps: { keepMounted: true }, sx: {
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        background: theme.palette.background.paper,
                    },
                }, children: _jsxs(Box, { sx: {
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }, children: [_jsxs(Box, { sx: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }, children: [_jsx(ThemeToggleButton, {}), _jsx(IconButton, { onClick: () => setMobileOpen(false), "aria-label": "Fermer le menu", children: _jsx(CloseIcon, {}) })] }), _jsxs(Typography, { variant: "h6", align: "center", sx: { fontWeight: 700, mb: 2 }, children: ["DANSE", " ", _jsx(Box, { component: "span", sx: { color: "primary.main" }, children: "CONTEMPORAINE" })] }), _jsx(Divider, {}), _jsx(List, { sx: { flexGrow: 1 }, children: navItems.map((item) => (_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { onClick: () => scrollToSection(item.id), children: _jsx(ListItemText, { primary: item.label }) }) }, item.id))) }), _jsx(Divider, { sx: { mb: 2 } }), _jsx(Box, { sx: { display: "flex", justifyContent: "center", gap: 1, mb: 2 }, children: socialLinks.map((social) => (_jsx(IconButton, { component: Link, href: social.url, "aria-label": social.name, sx: {
                                    background: "rgba(0, 255, 136, 0.1)",
                                    "&:hover": { background: "rgba(0, 255, 136, 0.2)" },
                                }, children: social.icon }, social.name))) }), _jsxs(FooterText, { variant: "body2", align: "center", sx: { mt: 1 }, children: ["\u00A9 ", new Date().getFullYear(), " Danse Contemporaine. Tous droits r\u00E9serv\u00E9s.", " ", _jsx(FooterLink, { href: "/mentions-legales", children: "Mentions l\u00E9gales" }), " - ", _jsx(FooterLink, { href: "/confidentialite", children: "Politique de confidentialit\u00E9" })] }), _jsx(Typography, { variant: "caption", component: "p", align: "center", sx: { color: "text.secondary", mt: 1 }, children: "Site con\u00E7u par SWAM Concept" })] }) }), _jsx(Box, { component: "main", sx: { pt: 8 }, children: children })] }));
};
