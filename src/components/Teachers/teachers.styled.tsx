import { styled } from "@mui/material/styles";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

export const TeachersContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
}));

export const TeachersCircleContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TeacherCard = styled(Card)(({ theme }) => ({
  width: 160,
  height: 160,
  borderRadius: "50%",
  overflow: "hidden",
  position: "absolute",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: `2px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "scale(1.1)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 25px rgba(0, 255, 136, 0.3)`,
  },
}));

export const TeacherCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  textAlign: "center",
}));

export const ModalCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: `0 0 30px rgba(0, 255, 136, 0.2)`,
  background: theme.palette.background.paper,
}));

export const ModalImage = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  overflow: "hidden",
  margin: "0 auto",
  border: `3px solid ${theme.palette.primary.main}`,
}));
