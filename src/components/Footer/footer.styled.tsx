import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

// text-center pt-12 border-t border-white/10
export const FooterContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(6),
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

// hover:text-[#00e67a] transition-colors + color #00ff88
export const FooterLink = styled(Link)({
  color: "#00ff88",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#00e67a",
  },
});
