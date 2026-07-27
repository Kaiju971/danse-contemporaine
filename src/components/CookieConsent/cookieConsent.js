import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { StyledDialog, StyledDialogTitle, StyledDialogContent, StyledDialogActions, MainText, AcceptButton, RefuseButton, CloseButton, } from "./cookieConsent.styled";
export const CookieConsent = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setOpen(true);
        }
    }, []);
    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setOpen(false);
    };
    const handleRefuse = () => {
        localStorage.setItem("cookieConsent", "false");
        setOpen(false);
    };
    return (_jsxs(StyledDialog, { open: open, onClose: () => setOpen(false), children: [_jsxs(StyledDialogTitle, { children: ["Utilisation des cookies", _jsx(CloseButton, { onClick: () => setOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(StyledDialogContent, { children: _jsxs(MainText, { variant: "body1", children: ["Nous utilisons des cookies pour am\u00E9liorer votre exp\u00E9rience de navigation, analyser le trafic du site et personnaliser le contenu.", _jsx("br", {}), _jsx("br", {}), "Conform\u00E9ment \u00E0 la ", _jsx("strong", { children: "RGPD" }), " et aux recommandations de la", " ", _jsx("strong", { children: "CNIL" }), ", vous pouvez accepter ou refuser l'utilisation des cookies non essentiels.", _jsx("br", {}), _jsx("a", { href: "https://www.cnil.fr/fr/cookies-et-autres-traceurs", target: "_blank", rel: "noopener noreferrer", children: "En savoir plus sur les cookies (CNIL)" })] }) }), _jsxs(StyledDialogActions, { children: [_jsx(RefuseButton, { onClick: handleRefuse, variant: "outlined", children: "Refuser" }), _jsx(AcceptButton, { onClick: handleAccept, variant: "contained", children: "Accepter" })] })] }));
};
