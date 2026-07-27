import { useState } from "react";
import { motion } from "framer-motion";
import {
  ContactContainer,
  InfoCard,
  InfoItem,
  InfoIcon,
  FormPaper,
  SubmitButton,
} from "./contact.styled";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Box,
  Link,
  IconButton,
  MenuItem,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Instagram,
  YouTube,
  X,
} from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TikTok from "@mui/icons-material/MusicNote";
// import Instagram from "..//../assets/image/instagram.png"

const socialLinks = [
  { name: "Facebook", icon: <Facebook />, url: "#" },
  { name: "Instagram", icon: <Instagram />, url: "#" },
  { name: "YouTube", icon: <YouTube />, url: "#" },
  { name: "LinkedIn", icon: <LinkedIn />, url: "#" },
  { name: "X", icon: <X />, url: "#" },
  { name: "TikTok", icon: <TikTok />, url: "#" },
];

//Encode un objet en x-form-urlencoded, seul format accepté par
//Netlify Forms (pas de JSON)

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <ContactContainer id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            CONTACT
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Une question ? Envoyez-nous un message, nous serons ravis de vous
            répondre.
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          {/* Informations */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InfoCard>
                <Typography variant="h4" gutterBottom>
                  Nos coordonnées
                </Typography>
                <InfoItem>
                  <InfoIcon>
                    <LocationOn color="primary" />
                  </InfoIcon>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      Adresse
                    </Typography>
                    <Typography>123 Rue de la Danse, 75000 Paris</Typography>
                  </Box>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <Phone color="primary" />
                  </InfoIcon>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      Téléphone
                    </Typography>
                    <Typography>+33 1 23 45 67 89</Typography>
                  </Box>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <Email color="primary" />
                  </InfoIcon>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography>contact@danse-contemporaine.fr</Typography>
                  </Box>
                </InfoItem>
              </InfoCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <InfoCard>
                <Typography variant="h4" gutterBottom>
                  Réseaux sociaux
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.name}
                      component={Link}
                      href={social.url}
                      sx={{
                        background: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          background: "rgba(0, 255, 136, 0.2)",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </InfoCard>
            </motion.div>
          </Grid>

          {/* Formulaire */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FormPaper>
                <Typography variant="h4" gutterBottom>
                  Pré-inscription
                </Typography>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Requis par Netlify pour relier ce POST au formulaire détecté au build via le formulaire "fantôùe statique. */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Piège à bots : un humain ne remplit jamais ce champ */}
                  <Box sx={{ display: "none" }}>
                    <label>
                      Ne pas remplir si vous êtes humain :
                      <input name="bot-field" />
                    </label>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Nom"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Prénom"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Téléphone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Cours souhaité"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        select
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      >
                        <MenuItem
                          value=""
                          disabled
                          sx={{ color: "primary.main" }}
                        >
                          Sélectionnez un cours
                        </MenuItem>
                        <MenuItem value="Contemporain Débutant">
                          Contemporain Débutant
                        </MenuItem>
                        <MenuItem value="Contemporain Intermédiaire">
                          Contemporain Intermédiaire
                        </MenuItem>
                        <MenuItem value="Atelier Création">
                          Atelier Création
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        slotProps={{
                          inputLabel: { style: { color: "primary.main" } },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": { borderColor: "#00ff88" },
                          },
                        }}
                      />
                    </Grid>
                    {status === "success" && (
                      <Grid size={{ xs: 12 }}>
                        <Typography sx={{ color: "primary.main" }}>
                          Merci! Votre message a bien été envoyé, nous vous
                          répondrons rapidement.
                        </Typography>
                      </Grid>
                    )}
                    {status === "error" && (
                      <Grid size={{ xs: 12 }}>
                        <Typography sx={{ color: "error.main" }}>
                          Une erreur est survenue, merci de réessayer dans
                          quelques instants.
                        </Typography>
                      </Grid>
                    )}

                    <Grid size={{ xs: 12 }}>
                      <SubmitButton
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={status === "submitting"}
                      >
                        {status === "submitting"
                          ? "Envoi en cours..."
                          : "Envoyer"}
                        {/* Envoyer */}
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </form>
              </FormPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </ContactContainer>
  );
};
