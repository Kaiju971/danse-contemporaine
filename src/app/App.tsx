// import { useState, Suspense, lazy } from "react";
// import { GlobalStyles, Dialog } from "@mui/material";
// import { LazyMotion, domAnimation } from "framer-motion";

// // 🟢 Composants critiques chargés immédiatement (Above the fold)
// import { Layout } from "../components/Layout";
// import { Home } from "../components/Home";

// // 🟢 Chargement différé des sections hors écran (Below the fold)
// const About = lazy(() =>
//   import("../components/About").then((m) => ({ default: m.About })),
// );
// const Courses = lazy(() =>
//   import("../components/Courses").then((m) => ({ default: m.Courses })),
// );
// const Teachers = lazy(() =>
//   import("../components/Teachers").then((m) => ({ default: m.Teachers })),
// );
// const Gallery = lazy(() =>
//   import("../components/Gallery").then((m) => ({ default: m.Gallery })),
// );
// const Schedule = lazy(() =>
//   import("../components/Schedule").then((m) => ({ default: m.Schedule })),
// );
// const Pricing = lazy(() =>
//   import("../components/Pricing").then((m) => ({ default: m.Pricing })),
// );
// const Contact = lazy(() =>
//   import("../components/Contact").then((m) => ({ default: m.Contact })),
// );
// const Footer = lazy(() =>
//   import("../components/Footer").then((m) => ({ default: m.Footer })),
// );
// const CookieConsent = lazy(() =>
//   import("../components/CookieConsent").then((m) => ({
//     default: m.CookieConsent,
//   })),
// );
// const LegalNotice = lazy(() =>
//   import("../components/LegalNotice").then((m) => ({ default: m.LegalNotice })),
// );
// const PrivacyPolicy = lazy(() =>
//   import("../components/PrivacyPolicy").then((m) => ({
//     default: m.PrivacyPolicy,
//   })),
// );

// export function App() {
//   const [openLegalNotice, setOpenLegalNotice] = useState(false);
//   const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);

//   return (
//     <LazyMotion features={domAnimation}>
//       <GlobalStyles
//         styles={{
//           "html, body": {
//             margin: 0,
//             padding: 0,
//             width: "100%",
//             height: "auto !important",
//             minHeight: "100vh",
//             overflowX: "clip",
//             overflowY: "auto !important",
//             position: "static !important",
//           },
//           "#root": {
//             width: "100%",
//             minHeight: "100vh",
//             height: "auto !important",
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//           },
//           /* 🟢 Rend le layout des sections sous le viewport instantané au reboot */
//           "#about, #courses, #teachers, #gallery, #schedule, #pricing, #contact":
//             {
//               contentVisibility: "auto",
//               containIntrinsicSize: "100vh",
//             },
//         }}
//       />
//       <Layout>
//         {/* Affiché immédiatement */}
//         <Home />

//         {/* Chargement progressif du reste du DOM */}
//         <Suspense fallback={null}>
//           <About />
//           <Courses />
//           <Teachers />
//           <Gallery />
//           <Schedule />
//           <Pricing />
//           <Contact />
//           <Footer
//             onLegalNoticeClick={() => setOpenLegalNotice(true)}
//             onPrivacyClick={() => setOpenPrivacyPolicy(true)}
//           />
//           <CookieConsent />

//           <Dialog
//             open={openLegalNotice}
//             onClose={() => setOpenLegalNotice(false)}
//             disableScrollLock
//             fullWidth
//             maxWidth="md"
//             sx={{
//               "& .MuiPaper-root": {
//                 background: "rgba(0, 0, 0, 0.95)",
//                 color: "white",
//               },
//             }}
//           >
//             <LegalNotice
//               onPrivacyClick={() => setOpenPrivacyPolicy(true)}
//               onClose={() => setOpenLegalNotice(false)}
//             />
//           </Dialog>

//           <Dialog
//             open={openPrivacyPolicy}
//             onClose={() => setOpenPrivacyPolicy(false)}
//             disableScrollLock
//             fullWidth
//             maxWidth="md"
//             sx={{
//               "& .MuiPaper-root": {
//                 background: "rgba(0, 0, 0, 0.95)",
//                 color: "white",
//               },
//             }}
//           >
//             <PrivacyPolicy onClose={() => setOpenPrivacyPolicy(false)} />
//           </Dialog>
//         </Suspense>
//       </Layout>
//     </LazyMotion>
//   );
// }

import { useState, Suspense, lazy, useEffect } from "react";
import { GlobalStyles, Dialog } from "@mui/material";
import { LazyMotion, domAnimation } from "framer-motion";
import { preloadImages } from "../utils/preloadImages";
import { LogoLoader } from "../components/LogoLoader";

// 🟢 Composants critiques chargés immédiatement
import { Layout } from "../components/Layout";
import { Home } from "../components/Home";

// 🟢 Logo et image de fond
import logoUrl from "../assets/image/LOGO-removebg-preview.png";
import heroImage from "../assets/image/image1Gallery.webp";
import imgG1 from "../assets/image/image1Gallery.webp";
import imgG2 from "../assets/image/image2Gallery.webp";
import imgG3 from "../assets/image/image3Gallery.webp";
import imgG4 from "../assets/image/image4Gallery.webp";
import imgG5 from "../assets/image/image5Gallery.webp";
import imgG6 from "../assets/image/image6Gallery.webp";
import imgG7 from "../assets/image/image7Gallery.webp";
import imgG8 from "../assets/image/image8Gallery.webp";
import imgG9 from "../assets/image/image9Gallery.webp";
import imgG10 from "../assets/image/image10Gallery.webp";

import teacher1 from "../assets/image/Ellipse 2.webp";
import teacher2 from "../assets/image/Ellipse3-HDR.webp";
import teacher3 from "../assets/image/Ellipse 4.webp";

// 🟢 Chargement différé
const About = lazy(() =>
  import("../components/About").then((m) => ({ default: m.About })),
);
const Courses = lazy(() =>
  import("../components/Courses").then((m) => ({ default: m.Courses })),
);
const Teachers = lazy(() =>
  import("../components/Teachers").then((m) => ({ default: m.Teachers })),
);
const Gallery = lazy(() =>
  import("../components/Gallery").then((m) => ({ default: m.Gallery })),
);
const Schedule = lazy(() =>
  import("../components/Schedule").then((m) => ({ default: m.Schedule })),
);
const Pricing = lazy(() =>
  import("../components/Pricing").then((m) => ({ default: m.Pricing })),
);
const Contact = lazy(() =>
  import("../components/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("../components/Footer").then((m) => ({ default: m.Footer })),
);
const CookieConsent = lazy(() =>
  import("../components/CookieConsent").then((m) => ({
    default: m.CookieConsent,
  })),
);
const LegalNotice = lazy(() =>
  import("../components/LegalNotice").then((m) => ({ default: m.LegalNotice })),
);
const PrivacyPolicy = lazy(() =>
  import("../components/PrivacyPolicy").then((m) => ({
    default: m.PrivacyPolicy,
  })),
);

export function App() {
  const [openLegalNotice, setOpenLegalNotice] = useState(false);
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ 1. Précharge les images critiques
    const criticalImages = [
      logoUrl,
      heroImage,
      imgG1,
      imgG2,
      imgG3,
      imgG4,
      imgG5,
      imgG6,
      imgG7,
      imgG8,
      imgG9,
      imgG10,
      teacher1,
      teacher2,
      teacher3,
    ];

    // ✅ 2. Précharge TOUS les composants lourds en arrière-plan pendant le loader
    const minDisplayTime = new Promise((resolve) => setTimeout(resolve, 1500));

    Promise.all([preloadImages(criticalImages), minDisplayTime])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LogoLoader logo={logoUrl} size={140} message="Chargement..." />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto !important",
            minHeight: "100vh",
            overflowX: "clip",
            overflowY: "auto !important",
            position: "static !important",
          },
          "#root": {
            width: "100%",
            minHeight: "100vh",
            height: "auto !important",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          },
        }}
      />
      <Layout>
        <Home />

        <Suspense fallback={null}>
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

          <Dialog
            open={openLegalNotice}
            onClose={() => setOpenLegalNotice(false)}
            disableScrollLock
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

          <Dialog
            open={openPrivacyPolicy}
            onClose={() => setOpenPrivacyPolicy(false)}
            disableScrollLock
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
        </Suspense>
      </Layout>
    </LazyMotion>
  );
}
