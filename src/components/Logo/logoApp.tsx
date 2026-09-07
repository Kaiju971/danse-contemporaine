import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

interface LogoAppProps {
  logo: string;
  size?: number;
}

const LogoApp = ({ logo, size = 70 }: LogoAppProps) => {
  const theme = useTheme();

  const notes = ["♪", "♫", "♩", "♬"];
  const radius = size * 0.7;

  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      {/* LOGO */}
      <motion.img
        src={logo}
        alt="Cambaléa"
        variants={{
          idle: {
            scale: 1,
          },
          hover: {
            scale: 1.05,
          },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          inset: 0,

          filter:
            theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "none",
        }}
      />

      {/* ORBITE DES NOTES */}
      <motion.div
        variants={{
          idle: {
            opacity: 0,
          },

          hover: {
            opacity: 1,
            rotate: 360,
          },
        }}
        transition={{
          opacity: {
            duration: 0.3,
          },

          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          pointerEvents: "none",
        }}
      >
        {notes.map((note, i) => {
          const angle = (360 / notes.length) * i;

          return (
            <Box
              key={i}
              sx={{
                position: "absolute",
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                },
                color: "primary.main",
                whiteSpace: "nowrap",

                transform: `
                  rotate(${angle}deg)
                  translateX(${radius}px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              {note}
            </Box>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
export default LogoApp;