import { styled } from "@mui/material/styles";
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";

export const CoursesContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.default,
  padding: theme.spacing(8, 0),
}));

export const CourseCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease",
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "translateY(-10px)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 25px rgba(0, 255, 136, 0.2)`,
  },
}));

export const CourseLevelChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "rgba(0, 255, 136, 0.2)",
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));
