import { styled } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
}));

export const StatsCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 25px rgba(0, 255, 136, 0.2)`,
  },
}));

export const StatNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontSize: "2.5rem",
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));
