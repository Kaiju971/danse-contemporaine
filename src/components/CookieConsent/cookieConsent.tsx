import { useState, useEffect } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  MainText,
  AcceptButton,
  RefuseButton,
  CloseButton,
} from "./cookieConsent.styled";

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

  return (
    <StyledDialog open={open} onClose={() => setOpen(false)}>
      <StyledDialogTitle>
        Utilisation des cookies
        <CloseButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </CloseButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <MainText variant="body1">
          Nous utilisons des cookies pour améliorer votre expérience de
          navigation, analyser le trafic du site et personnaliser le contenu.
          <br />
          <br />
          Conformément à la <strong>RGPD</strong> et aux recommandations de la{" "}
          <strong>CNIL</strong>, vous pouvez accepter ou refuser l'utilisation
          des cookies non essentiels.
          <br />
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus sur les cookies (CNIL)
          </a>
        </MainText>
      </StyledDialogContent>
      <StyledDialogActions>
        <RefuseButton onClick={handleRefuse} variant="outlined">
          Refuser
        </RefuseButton>
        <AcceptButton onClick={handleAccept} variant="contained">
          Accepter
        </AcceptButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};
