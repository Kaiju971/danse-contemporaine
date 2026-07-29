import { useState } from "react";
import { GlobalStyles } from "@mui/material";
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
import {css} from "@mui/material";

export function App() {
  const [openLegalNotice, setOpenLegalNotice] = useState(false);
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);

  return (
    <>
      {/* ✅ Ajoute ça en haut de ton app */}
      <GlobalStyles
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #root,
          body {
            * {
              font-family: "Digital-7", sans-serif;
            }
            margin: 0;
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
              /* chrome based */
              width: 0px;
            }
          }
        `}
      />
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
          <LegalNotice
            onPrivacyClick={() => setOpenPrivacyPolicy(true)}
            onClose={() => setOpenLegalNotice(false)}
          />
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
          <PrivacyPolicy onClose={() => setOpenPrivacyPolicy(false)} />
        </Dialog>
      </Layout>
    </>
  );
}
