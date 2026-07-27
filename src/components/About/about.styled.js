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
    // Voile blanc en dark (ressort sur fond navy), voile navy très léger
    // en light (sinon invisible sur un fond déjà blanc).
    background: theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 17, 51, 0.03)",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius * 2,
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
