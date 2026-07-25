import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        // mWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "linear-gradient(135deg, #001133 0%, #000822 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Effet de projecteur */}
      <Box
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.05) 360%)",
          filter: "blur(50px)",
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
          >
            COURS DE DANSE
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{ color: "#00ff88", fontSize: { xs: "4rem", md: "6rem" } }}
          >
            CONTEMPORAINE
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mt: 4, mb: 6, maxWidth: 800, mx: "auto" }}
          >
            Danse contemporaine est accessible à toutes. Fondée par Pascale,
            c'est une école pleine d'énergie et de bienveillance.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
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
