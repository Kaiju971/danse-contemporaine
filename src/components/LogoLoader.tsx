import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

interface LogoLoaderProps {
  logo: string;
  size?: number;
  message?: string;
}

export const LogoLoader = ({ logo, size = 140, message }: LogoLoaderProps) => {
  const theme = useTheme();
  const notes = ["♪", "♫", "♩", "♬"];
  const radius = size * 0.65;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: theme.palette.mode === "dark" ? "#0a0a0a" : "#ffffff",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* ✅ Logo fixe au centre avec un léger pulse */}
        <motion.img
          src={logo}
          alt="Chargement"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            filter:
              theme.palette.mode === "dark"
                ? "invert(1) brightness(1.2)"
                : "none",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ✅ Notes de musique en orbite avec framer-motion */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {notes.map((note, i) => {
            const angle = (360 / notes.length) * i;
            return (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  fontSize: "22px",
                  color: "primary.main",
                  // ✅ Positionne chaque note sur le cercle
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {note}
              </Box>
            );
          })}
        </motion.div>
      </Box>

      {message && (
        <Box
          component="p"
          sx={{
            mt: 3,
            color: "text.secondary",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {message}
        </Box>
      )}
    </Box>
  );
};
