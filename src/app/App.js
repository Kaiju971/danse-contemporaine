import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog } from "@mui/material"; // ✅ Ajoute cet import
import { Layout } from "../components/Layout";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Courses } from "../components/Courses";
import { Teachers } from "../components/Teachers";
import { Gallery } from "../components/Gallery";
import { Schedule } from "../components/Schedule";
import { Pricing } from "../components/Pricing";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CookieConsent } from "../components/CookieConsent";
import { LegalNotice } from "../components/LegalNotice";
import { PrivacyPolicy } from "../components/PrivacyPolicy"; // ✅ Crée ce composant si ce n'est pas fait
export function App() {
    const [openLegalNotice, setOpenLegalNotice] = useState(false);
    const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
    return (_jsxs(Layout, { children: [_jsx(Home, {}), _jsx(About, {}), _jsx(Courses, {}), _jsx(Teachers, {}), _jsx(Gallery, {}), _jsx(Schedule, {}), _jsx(Pricing, {}), _jsx(Contact, {}), _jsx(Footer, { onLegalNoticeClick: () => setOpenLegalNotice(true), onPrivacyClick: () => setOpenPrivacyPolicy(true) }), _jsx(CookieConsent, {}), _jsx(Dialog, { open: openLegalNotice, onClose: () => setOpenLegalNotice(false), fullWidth: true, maxWidth: "md", sx: {
                    "& .MuiPaper-root": {
                        background: "rgba(0, 0, 0, 0.95)",
                        color: "white",
                    },
                }, children: _jsx(LegalNotice, { onPrivacyClick: () => setOpenPrivacyPolicy(true) }) }), _jsx(Dialog, { open: openPrivacyPolicy, onClose: () => setOpenPrivacyPolicy(false), fullWidth: true, maxWidth: "md", sx: {
                    "& .MuiPaper-root": {
                        background: "rgba(0, 0, 0, 0.95)",
                        color: "white",
                    },
                }, children: _jsx(PrivacyPolicy, {}) })] }));
}
