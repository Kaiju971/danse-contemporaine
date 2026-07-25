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

export function App() {
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
      <Footer />
      <CookieConsent />
    </Layout>
  );
}
