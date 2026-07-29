// import { Box, Typography, Container, Divider, Link, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { useState } from "react";

// interface LegalNoticeProps {
//   onPrivacyClick?: () => void; // Optionnel pour la politique de confidentialité
// }

// export const LegalNotice = ({ onPrivacyClick }: LegalNoticeProps) => {
//   const [selectedReturn, setSelectedReturn] = useState<number | null>(null);
//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         background: (theme) =>
//           theme.palette.mode === "dark"
//             ? "rgba(0, 0, 0, 0.2)"
//             : "rgba(255, 255, 255, 0.7)",
//         backdropFilter: "blur(10px)",
//         boxShadow: "none",
//         borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//         py: 6,
//       }}
//     >
//       <Typography
//         variant="h2"
//         align="center"
//         gutterBottom
//         sx={{ color: "primary.main" }}
//       >
//         Mentions légales
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 1. Éditeur du site */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         1. Éditeur du site
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Nom de l'école :</strong> Danse Contemporaine
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Forme juridique :</strong> Association
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Adresse :</strong> 12 Rue de la Danse, 75000 Paris (remplace par
//         ton adresse réelle)
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Téléphone :</strong> 01 23 45 67 89
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Email :</strong> contact@danse-contemporaine.fr
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Directrice de la publication :</strong> Pascale [Nom de famille]
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 2. Hébergement */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         2. Hébergement
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Hébergeur :</strong> Netlify
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Adresse :</strong> Netlify, Inc. 101 2nd Street San Francisco,
//         CA 94105
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         <strong>Site web :</strong>{" "}
//         <Link href="https://www.netlify.com" target="_blank">
//           https://www.netlify.com
//         </Link>
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 3. Propriété intellectuelle */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         3. Propriété intellectuelle
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         L'ensemble de ce site relève de la législation française et
//         internationale sur le droit d'auteur et la propriété intellectuelle.
//         Toutes les marques, logos, photos et contenus présents sur ce site sont
//         la propriété exclusive de l'école Danse Contemporaine.
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Toute reproduction, représentation, modification, publication,
//         adaptation de tout ou partie des éléments du site, quel que soit le
//         moyen ou le procédé utilisé, est interdite sans autorisation écrite
//         préalable de l'école Danse Contemporaine.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 4. Données personnelles */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         4. Données personnelles et cookies
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Conformément à la{" "}
//         <Link
//           href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
//           target="_blank"
//         >
//           loi n°78-17
//         </Link>{" "}
//         du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
//         libertés, modifiée, et au{" "}
//         <Link
//           href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
//           target="_blank"
//         >
//           Règlement Général sur la Protection des Données (RGPD)
//         </Link>
//         , vous disposez d'un droit d'accès, de rectification, de suppression, de
//         limitation, d'opposition et de portabilité sur vos données personnelles.
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Pour exercer ces droits, vous pouvez nous contacter à l'adresse :
//         contact@danse-contemporaine.fr.
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Ce site utilise des cookies pour améliorer votre expérience de
//         navigation. Vous pouvez accepter ou refuser leur utilisation via la
//         bannière de cookies. Pour en savoir plus, consultez notre{" "}
//         <Link
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             onPrivacyClick?.(); // ✅ Appelle la fonction au clic
//           }}
//         >
//           politique de confidentialité
//         </Link>
//         .
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 5. Limitation de responsabilité */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         5. Limitation de responsabilité
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Les informations contenues sur ce site sont données à titre indicatif et
//         ne sont pas exhaustives. L'école Danse Contemporaine ne saurait être
//         tenue responsable des dommages directs ou indirects résultant de l'accès
//         à ce site ou de l'utilisation des informations qui y sont contenues.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* 6. Droit applicable */}
//       <Typography variant="h5" component="h2" gutterBottom>
//         6. Droit applicable et attribution de juridiction
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         Tout litige en relation avec l'utilisation du site
//         danse-contemporaine.fr est soumis au droit français. Il est fait
//         attribution exclusive de juridiction aux tribunaux compétents de Paris.
//       </Typography>

//       <Typography
//         sx={{
//           color: "text.secondary",
//           mt: 4,
//           fontStyle: "italic",
//         }}
//       >
//         Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
//       </Typography>
//       <IconButton
//         onClick={() => (null)}
//         aria-label="Fermer"
//         sx={{
//           position: "absolute",
//           top: -48,
//           right: 0,
//           color: (theme) =>
//             theme.palette.mode === "dark" ? "common.white" : "primary.main",
//           background: "rgba(255, 255, 255, 0.1)",
//           "&:hover": {
//             background: "rgba(255, 255, 255, 0.2)",
//           },
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//     </Container>
//   );
// };
import {
  Box,
  Typography,
  Container,
  Divider,
  Link,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

interface LegalNoticeProps {
  onPrivacyClick?: () => void;
  onClose?: () => void; // ✅ Ajout pour fermer la modale
}

export const LegalNotice = ({ onPrivacyClick, onClose }: LegalNoticeProps) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative", // ✅ Nécessaire pour positionner le bouton de fermeture
        background:
          theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, 0.9)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: (theme) => theme.shadows[10],
        borderRadius: 1,
        p: 4,
        color: theme.palette.text.primary,
      }}
    >
      {/* ✅ Bouton de fermeture corrigé */}
      <IconButton
        onClick={onClose} // ✅ Appelle la fonction de fermeture
        aria-label="Fermer"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: (theme) => theme.palette.text.primary,
          background: (theme) => theme.palette.background.paper,
          "&:hover": {
            background: (theme) => theme.palette.action.hover,
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "primary.main",
          mb: 3,
          fontSize: { xxs: "0.5rem", xs: "2rem", md: "6rem" },
        }}
      >
        Mentions légales
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 1. Éditeur du site */}
      <Typography variant="h5" component="h2" gutterBottom>
        1. Éditeur du site
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Nom de l'école :</strong> Danse Contemporaine
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Forme juridique :</strong> Association
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Adresse :</strong> 12 Rue de la Danse, 75000 Paris
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Téléphone :</strong> 01 23 45 67 89
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Email :</strong> contact@danse-contemporaine.fr
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Directrice de la publication :</strong> Pascale [Nom de famille]
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 2. Hébergement */}
      <Typography variant="h5" component="h2" gutterBottom>
        2. Hébergement
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Hébergeur :</strong> Netlify
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Adresse :</strong> Netlify, Inc. 101 2nd Street San Francisco,
        CA 94105
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        <strong>Site web :</strong>{" "}
        <Link
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.netlify.com
        </Link>
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 3. Propriété intellectuelle */}
      <Typography variant="h5" component="h2" gutterBottom>
        3. Propriété intellectuelle
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        L'ensemble de ce site relève de la législation française et
        internationale sur le droit d'auteur et la propriété intellectuelle.
        Toutes les marques, logos, photos et contenus présents sur ce site sont
        la propriété exclusive de l'école Danse Contemporaine.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Toute reproduction, représentation, modification, publication,
        adaptation de tout ou partie des éléments du site, quel que soit le
        moyen ou le procédé utilisé, est interdite sans autorisation écrite
        préalable de l'école Danse Contemporaine.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 4. Données personnelles */}
      <Typography variant="h5" component="h2" gutterBottom>
        4. Données personnelles et cookies
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Conformément à la{" "}
        <Link
          href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
          target="_blank"
          rel="noopener noreferrer"
        >
          loi n°78-17
        </Link>{" "}
        du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
        libertés, modifiée, et au{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
          target="_blank"
          rel="noopener noreferrer"
        >
          Règlement Général sur la Protection des Données (RGPD)
        </Link>
        , vous disposez d'un droit d'accès, de rectification, de suppression, de
        limitation, d'opposition et de portabilité sur vos données personnelles.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Pour exercer ces droits, vous pouvez nous contacter à l'adresse :
        contact@danse-contemporaine.fr.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Ce site utilise des cookies pour améliorer votre expérience de
        navigation. Vous pouvez accepter ou refuser leur utilisation via la
        bannière de cookies. Pour en savoir plus, consultez notre{" "}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPrivacyClick?.();
          }}
        >
          politique de confidentialité
        </Link>
        .
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 5. Limitation de responsabilité */}
      <Typography variant="h5" component="h2" gutterBottom>
        5. Limitation de responsabilité
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Les informations contenues sur ce site sont données à titre indicatif et
        ne sont pas exhaustives. L'école Danse Contemporaine ne saurait être
        tenue responsable des dommages directs ou indirects résultant de l'accès
        à ce site ou de l'utilisation des informations qui y sont contenues.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* 6. Droit applicable */}
      <Typography variant="h5" component="h2" gutterBottom>
        6. Droit applicable et attribution de juridiction
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",

          mb: 2,
        }}
      >
        Tout litige en relation avec l'utilisation du site
        danse-contemporaine.fr est soumis au droit français. Il est fait
        attribution exclusive de juridiction aux tribunaux compétents de Paris.
      </Typography>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 3, fontStyle: "italic", color: "text.secondary" }}
      >
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </Typography>
    </Container>
  );
};