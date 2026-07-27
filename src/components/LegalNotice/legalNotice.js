import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container, Divider, Link } from "@mui/material";
export const LegalNotice = ({ onPrivacyClick }) => {
    return (_jsxs(Container, { maxWidth: "md", sx: {
            background: (theme) => theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            py: 6,
        }, children: [_jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, sx: { color: "primary.main" }, children: "Mentions l\u00E9gales" }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "1. \u00C9diteur du site" }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Nom de l'\u00E9cole :" }), " Danse Contemporaine"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Forme juridique :" }), " Association"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Adresse :" }), " 12 Rue de la Danse, 75000 Paris (remplace par ton adresse r\u00E9elle)"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "T\u00E9l\u00E9phone :" }), " 01 23 45 67 89"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Email :" }), " contact@danse-contemporaine.fr"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Directrice de la publication :" }), " Pascale [Nom de famille]"] }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "2. H\u00E9bergement" }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "H\u00E9bergeur :" }), " Netlify"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Adresse :" }), " Netlify, Inc. 101 2nd Street San Francisco, CA 94105"] }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: [_jsx("strong", { children: "Site web :" }), " ", _jsx(Link, { href: "https://www.netlify.com", target: "_blank", children: "https://www.netlify.com" })] }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "3. Propri\u00E9t\u00E9 intellectuelle" }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: "L'ensemble de ce site rel\u00E8ve de la l\u00E9gislation fran\u00E7aise et internationale sur le droit d'auteur et la propri\u00E9t\u00E9 intellectuelle. Toutes les marques, logos, photos et contenus pr\u00E9sents sur ce site sont la propri\u00E9t\u00E9 exclusive de l'\u00E9cole Danse Contemporaine." }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: "Toute reproduction, repr\u00E9sentation, modification, publication, adaptation de tout ou partie des \u00E9l\u00E9ments du site, quel que soit le moyen ou le proc\u00E9d\u00E9 utilis\u00E9, est interdite sans autorisation \u00E9crite pr\u00E9alable de l'\u00E9cole Danse Contemporaine." }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "4. Donn\u00E9es personnelles et cookies" }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: ["Conform\u00E9ment \u00E0 la", " ", _jsx(Link, { href: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees", target: "_blank", children: "loi n\u00B078-17" }), " ", "du 6 janvier 1978 relative \u00E0 l'informatique, aux fichiers et aux libert\u00E9s, modifi\u00E9e, et au", " ", _jsx(Link, { href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679", target: "_blank", children: "R\u00E8glement G\u00E9n\u00E9ral sur la Protection des Donn\u00E9es (RGPD)" }), ", vous disposez d'un droit d'acc\u00E8s, de rectification, de suppression, de limitation, d'opposition et de portabilit\u00E9 sur vos donn\u00E9es personnelles."] }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: "Pour exercer ces droits, vous pouvez nous contacter \u00E0 l'adresse : contact@danse-contemporaine.fr." }), _jsxs(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: ["Ce site utilise des cookies pour am\u00E9liorer votre exp\u00E9rience de navigation. Vous pouvez accepter ou refuser leur utilisation via la banni\u00E8re de cookies. Pour en savoir plus, consultez notre", " ", _jsx(Link, { href: "#", onClick: (e) => {
                            e.preventDefault();
                            onPrivacyClick?.(); // ✅ Appelle la fonction au clic
                        }, children: "politique de confidentialit\u00E9" }), "."] }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "5. Limitation de responsabilit\u00E9" }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: "Les informations contenues sur ce site sont donn\u00E9es \u00E0 titre indicatif et ne sont pas exhaustives. L'\u00E9cole Danse Contemporaine ne saurait \u00EAtre tenue responsable des dommages directs ou indirects r\u00E9sultant de l'acc\u00E8s \u00E0 ce site ou de l'utilisation des informations qui y sont contenues." }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h5", component: "h2", gutterBottom: true, children: "6. Droit applicable et attribution de juridiction" }), _jsx(Typography, { variant: "body1", align: "center", sx: {
                    color: "text.secondary",
                    mb: 2,
                }, children: "Tout litige en relation avec l'utilisation du site danse-contemporaine.fr est soumis au droit fran\u00E7ais. Il est fait attribution exclusive de juridiction aux tribunaux comp\u00E9tents de Paris." }), _jsxs(Typography, { sx: {
                    color: "text.secondary",
                    mt: 4,
                    fontStyle: "italic",
                }, children: ["Derni\u00E8re mise \u00E0 jour : ", new Date().toLocaleDateString("fr-FR")] })] }));
};
