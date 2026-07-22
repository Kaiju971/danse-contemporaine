import { styled } from "@mui/material/styles";
import { Box, Paper, Typography, Button } from "@mui/material";

export const PricingContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.default,
  padding: theme.spacing(8, 0),
}));

export const PricingCard = styled(Paper)<{ isFeatured?: boolean }>(
  ({ theme, isFeatured }) => ({
    padding: theme.spacing(4),
    borderRadius: (theme.shape.borderRadius as number) * 2,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    ...(isFeatured && {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 20px rgba(0, 255, 136, 0.2)`,
      transform: "scale(1.05)",
    }),
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: `0 12px 25px rgba(0, 255, 136, 0.2)`,
    },
  }),
);

export const Price = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const PricingButton = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
  color: theme.palette.common.black,
  "&:hover": {
    background: "linear-gradient(45deg, #00e67a 0%, #00ff88 100%)",
  },
}));
