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

interface PrivacyPolicyProps {
  onClose?: () => void; // ✅ Ajout pour fermer la modale
}

export const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
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
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          color: "#00ff88",
          mb: 3,
          fontSize: { xxs: "0.5rem", xs: "2rem", md: "6rem" },
        }}
      >
        Politique de confidentialité
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 1. Introduction */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        1. Introduction
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        L’association <strong>Danse Contemporaine</strong> (ci-après «
        l’Association ») s’engage à protéger la vie privée de ses membres,
        élèves et visiteurs. Cette politique de confidentialité explique comment
        nous collectons, utilisons et protégeons vos données personnelles
        conformément au{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#00ff88" }}
        >
          Règlement Général sur la Protection des Données (RGPD)
        </Link>{" "}
        et à la loi française.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 2. Données collectées */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        2. Données personnelles collectées
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Nous pouvons collecter les données suivantes :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>Données d’identification</strong> : Nom, prénom, adresse
          e-mail, numéro de téléphone (pour les inscriptions aux cours).
        </Typography>
        <Typography component="li">
          <strong>Données de paiement</strong> : Informations bancaires
          (uniquement via des plateformes sécurisées comme Stripe ou PayPal,
          nous ne stockons pas ces données).
        </Typography>
        <Typography component="li">
          <strong>Données de navigation</strong> : Adresse IP, cookies, pages
          visitées (via Google Analytics, sous réserve de votre consentement).
        </Typography>
        <Typography component="li">
          <strong>Données spécifiques aux cours</strong> : Niveau de danse,
          préférences artistiques (pour personnaliser votre expérience).
        </Typography>
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 3. Finalités */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        3. Finalités du traitement
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Vos données sont utilisées pour :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          Gérer votre inscription aux cours et ateliers.
        </Typography>
        <Typography component="li">
          Vous envoyer des informations sur vos réservations et les actualités
          de l’association (si vous avez donné votre consentement).
        </Typography>
        <Typography component="li">
          Améliorer notre site web et nos services (via des cookies
          analytiques).
        </Typography>
        <Typography component="li">
          Respecter nos obligations légales (comptabilité, sécurité, etc.).
        </Typography>
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 4. Base légale */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        4. Base légale du traitement
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Nous traitons vos données sur les bases légales suivantes :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>Exécution d’un contrat</strong> : Pour gérer votre inscription
          aux cours (article 6.1.b du RGPD).
        </Typography>
        <Typography component="li">
          <strong>Consentement</strong> : Pour les cookies et les newsletters
          (article 6.1.a du RGPD). Vous pouvez retirer votre consentement à tout
          moment.
        </Typography>
        <Typography component="li">
          <strong>Obligation légale</strong> : Pour répondre à des obligations
          comptables ou administratives (article 6.1.c du RGPD).
        </Typography>
        <Typography component="li">
          <strong>Intérêt légitime</strong> : Pour améliorer nos services
          (article 6.1.f du RGPD), sous réserve de vos droits.
        </Typography>
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 5. Durée de conservation */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        5. Durée de conservation
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Vos données sont conservées pendant :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>3 ans</strong> pour les données d’inscription (à partir de
          votre dernière activité).
        </Typography>
        <Typography component="li">
          <strong>13 mois</strong> pour les cookies (sauf retrait de votre
          consentement).
        </Typography>
        <Typography component="li">
          <strong>10 ans</strong> pour les données comptables (obligation
          légale).
        </Typography>
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 6. Droits RGPD */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        6. Vos droits
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Conformément au RGPD, vous disposez des droits suivants :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>Droit d’accès</strong> : Demander une copie de vos données
          personnelles.
        </Typography>
        <Typography component="li">
          <strong>Droit de rectification</strong> : Corriger des données
          inexactes.
        </Typography>
        <Typography component="li">
          <strong>Droit à l’effacement</strong> : Supprimer vos données (sous
          réserve des obligations légales).
        </Typography>
        <Typography component="li">
          <strong>Droit à la limitation</strong> : Limiter le traitement de vos
          données.
        </Typography>
        <Typography component="li">
          <strong>Droit à la portabilité</strong> : Récupérer vos données dans
          un format structuré.
        </Typography>
        <Typography component="li">
          <strong>Droit d’opposition</strong> : Vous opposer au traitement de
          vos données pour des motifs légitimes.
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Pour exercer ces droits, envoyez un e-mail à{" "}
        <Link
          href="mailto:contact@danse-contemporaine.fr"
          sx={{ color: "#00ff88" }}
        >
          contact@danse-contemporaine.fr
        </Link>{" "}
        ou un courrier à l’adresse de l’association. Nous répondrons dans un
        délai d’<strong>1 mois</strong>.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 7. Cookies */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        7. Utilisation des cookies
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Notre site utilise des cookies pour :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>Cookies nécessaires</strong> : Pour le bon fonctionnement du
          site (ex : session utilisateur). Ces cookies ne peuvent pas être
          désactivés.
        </Typography>
        <Typography component="li">
          <strong>Cookies analytiques</strong> : Pour mesurer la fréquentation
          du site (via Google Analytics). Ces cookies sont soumis à votre
          consentement.
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Vous pouvez gérer vos préférences de cookies via la bannière qui
        apparaît à votre première visite, ou en cliquant sur le lien « Gérer les
        cookies » en bas de page.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 8. Sécurité */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        8. Sécurité des données
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Nous mettons en œuvre des mesures techniques et organisationnelles pour
        protéger vos données contre les accès non autorisés, les pertes ou les
        destructions. Cependant, aucune transmission sur Internet n’est
        totalement sécurisée. Nous ne pouvons pas garantir une sécurité absolue.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 9. Modifications */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        9. Modifications de cette politique
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Les modifications seront publiées sur
        cette page et, si les changements sont significatifs, nous vous en
        informerons par e-mail ou via une notification sur le site.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* 10. Contact */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#00ff88" }}
      >
        10. Contact
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Pour toute question concernant cette politique de confidentialité,
        contactez-nous :
      </Typography>
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <Typography component="li">
          <strong>E-mail</strong> :{" "}
          <Link
            href="mailto:contact@danse-contemporaine.fr"
            sx={{ color: "#00ff88" }}
          >
            contact@danse-contemporaine.fr
          </Link>
        </Typography>
        <Typography component="li">
          <strong>Adresse postale</strong> : 12 Rue de la Danse, 75000 Paris
        </Typography>
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mt: 4,
          fontStyle: "italic",
        }}
      >
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </Typography>
    </Container>
  );
};
