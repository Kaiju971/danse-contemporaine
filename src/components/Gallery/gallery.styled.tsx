import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const GalleryContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflowX: "clip",
  minHeight: "100vh",
  background: theme.palette.background.default,
  padding: theme.spacing(8, 0),
}));

export const GalleryImageCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  aspectRatio: "4 / 3",

  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  "&:hover": {
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",

    "& img": {
      transform: "scale(1.03)",
    },

    "& .gallery-overlay": {
      opacity: 1,
    },
  },
}));

export const ImageOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,

  background:
    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  opacity: 0,

  pointerEvents: "none",

  transition: "opacity 0.3s ease",

  padding: theme.spacing(3),

  color: theme.palette.common.white,
}));
