import { styled } from "@mui/material/styles";
import { Box, Paper, Button } from "@mui/material";

export const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
}));

export const InfoCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const InfoIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  background: "rgba(0, 255, 136, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const FormPaper = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  padding: theme.spacing(4),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
  color: theme.palette.common.black,
  fontWeight: 600,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    background: "linear-gradient(45deg, #00e67a 0%, #00ff88 100%)",
  },
}));
