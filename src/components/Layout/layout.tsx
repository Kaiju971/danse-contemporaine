import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import LogoApp from "../../components/Logo/logoApp"; // Adapte l'import selon qu'il s'agisse d'un export default ou nommé
import LOGO from "../../../public/favicon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import TikTok from "@mui/icons-material/MusicNote";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeToggleButton } from "../../theme/themeToggleButton";
import { FooterText, FooterLink } from "../Footer/footer.styled";

const navItems = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "L'association" },
  { id: "courses", label: "Nos activités" },
  { id: "teachers", label: "L'équipe" },
  { id: "gallery", label: "Galerie" },
  { id: "schedule", label: "Planning" },
  { id: "pricing", label: "Tarifs" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  { name: "Instagram", icon: <Instagram />, url: "#" },
  { name: "YouTube", icon: <YouTube />, url: "#" },

  { name: "TikTok", icon: <TikTok />, url: "#" },
];

const drawerWidth = 300;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isCompact = useMediaQuery(theme.breakpoints.down(640));
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <AppBar
        position="fixed"
        sx={{
          // backdropFilter désactivé sur mobile : coûteux à recalculer à
          // chaque frame de scroll tant que l'AppBar (position: fixed)
          // reste visible. Compensé par un fond plus opaque à la place.
          background: (theme) =>
            theme.palette.mode === "dark"
              ? isMobile
                ? "rgba(0, 0, 0, 0.75)"
                : "rgba(0, 0, 0, 0.2)"
              : isMobile
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(255, 255, 255, 0.7)",
          backdropFilter: isMobile ? "none" : "blur(10px)",
          boxShadow: "none",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1.5, sm: 2 },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => scrollToSection("home")}
          >
            {/* Logo principal */}
            <LogoApp logo={LOGO} size={isCompact ? 60 : isMobile ? 70 : 80} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 1 : 3,
              flexShrink: 0,
            }}
          >
            {!isMobile &&
              navItems.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Typography>
              ))}

            {!isMobile && <ThemeToggleButton />}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="Ouvrir le menu"
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        disableScrollLock
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.paper,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThemeToggleButton />
            <IconButton
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Logo dans le Drawer */}
          <Box
            onClick={() => scrollToSection("home")}
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 2,
              cursor: "pointer",
            }}
          >
            <LogoApp logo={LOGO} size={100} />
          </Box>

          <Divider />

          <List sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.name}
                component={Link}
                href={social.url}
                aria-label={social.name}
                sx={{
                  background: "rgba(0, 255, 136, 0.1)",
                  "&:hover": { background: "rgba(0, 255, 136, 0.2)" },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <FooterText variant="body2" align="center" sx={{ mt: 1 }}>
            © {new Date().getFullYear()} Cambaléa. Tous droits réservés.{" "}
            <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
            {" - "}
            <FooterLink href="/confidentialite">
              Politique de confidentialité
            </FooterLink>
          </FooterText>

          <Typography
            variant="caption"
            component="p"
            align="center"
            sx={{ color: "text.secondary", mt: 1 }}
          >
            Site conçu par SWAM Concept
          </Typography>
        </Box>
      </Drawer>

      <Box component="main" sx={{ pt: 8, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};
