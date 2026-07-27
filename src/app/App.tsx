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

  return (
    <Layout>
      <Home />
      <About />
      <Courses />
      <Teachers />
      <Gallery />
      <Schedule />
      <Pricing />
      <Contact />
      <Footer
        onLegalNoticeClick={() => setOpenLegalNotice(true)}
        onPrivacyClick={() => setOpenPrivacyPolicy(true)}
      />
      <CookieConsent />

      {/* Modale pour Mentions légales */}
      <Dialog
        open={openLegalNotice}
        onClose={() => setOpenLegalNotice(false)}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            background: "rgba(0, 0, 0, 0.95)",
            color: "white",
          },
        }}
      >
        <LegalNotice onPrivacyClick={() => setOpenPrivacyPolicy(true)} />
      </Dialog>

      {/* Modale pour Politique de confidentialité */}
      <Dialog
        open={openPrivacyPolicy}
        onClose={() => setOpenPrivacyPolicy(false)}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            background: "rgba(0, 0, 0, 0.95)",
            color: "white",
          },
        }}
      >
        <PrivacyPolicy />
      </Dialog>
    </Layout>
  );
}
