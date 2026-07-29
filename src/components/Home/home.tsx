import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import heroImage from "../../assets/image/image1Gallery.png";

export const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white",
        overflow: "hidden",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Voile sombre par-dessus l'image, pour que le texte reste lisible
          quelle que soit la photo utilisée. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0, 17, 51, 0.094) 0%, rgba(0, 8, 34, 0.725) 100%)",
          zIndex: 0,
        }}
      />

      {/* Effet de projecteur (radial-gradient = halo centre → bords) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,255,136,0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ fontSize: { xxs:"0.5rem",xs: "2.5rem", md: "5rem" } }}
          >
            COURS DE DANSE
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{ color: "primary.main", fontSize: {xxs:"0.5rem", xs: "2rem", md: "6rem" } }}
          >
            CONTEMPORAINE
          </Typography>
          <Typography
            variant="h5"
            align="center"
            
            sx={{
              color: "primary.main",
              mt: 4,
              mb: 6,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Danse contemporaine est accessible à tous. Fondée par Pascale,
            c'est une école pleine d'énergie et de bienveillance.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
                color: "black",
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 4,
              }}
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              DÉCOUVRIR NOS COURS
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              NOUS CONTACTER
            </Button>
          </Box>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 2,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translate(-50%, 0)" },
            "40%": { transform: "translate(-50%, -10px)" },
            "60%": { transform: "translate(-50%, -5px)" },
          },
        }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDownwardIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
      </Box>
    </Box>
  );
};
