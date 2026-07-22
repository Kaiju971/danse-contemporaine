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
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const socialLinks = [
  { name: "Facebook", icon: <Facebook />, url: "#" },
  { name: "Instagram", icon: <Instagram />, url: "#" },
  { name: "YouTube", icon: <YouTube />, url: "#" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
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
          <Typography variant="h2" align="center" gutterBottom>
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
                <form onSubmit={handleSubmit}>
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
                          inputLabel: { style: { color: "#00ff88" } },
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
                          inputLabel: { style: { color: "#00ff88" } },
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
                          inputLabel: { style: { color: "#00ff88" } },
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
                          inputLabel: { style: { color: "#00ff88" } },
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
                          inputLabel: { style: { color: "#00ff88" } },
                          select: { native: true },
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
                        <option value="">Sélectionnez un cours</option>
                        <option value="Contemporain Débutant">
                          Contemporain Débutant
                        </option>
                        <option value="Contemporain Intermédiaire">
                          Contemporain Intermédiaire
                        </option>
                        <option value="Atelier Création">
                          Atelier Création
                        </option>
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
                          inputLabel: { style: { color: "#00ff88" } },
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
                      <SubmitButton
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                      >
                        Envoyer
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
