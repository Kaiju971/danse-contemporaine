import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const GalleryContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.default,
  padding: theme.spacing(8, 0),
}));

export const GalleryImageCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    "& .overlay": {
      opacity: 1,
    },
  },
}));

export const ImageOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  padding: theme.spacing(3),
  color: theme.palette.common.white,
}));
