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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeToggleButton } from "../../theme/themeToggleButton";
import { FooterText, FooterLink } from "../Footer/footer.styled";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";
import TikTok from "@mui/icons-material/MusicNote";

const navItems = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "L'école" },
  { id: "courses", label: "Nos cours" },
  { id: "teachers", label: "Professeurs" },
  { id: "gallery", label: "Galerie" },
  { id: "schedule", label: "Planning" },
  { id: "pricing", label: "Tarifs" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  { name: "Facebook", icon: <Facebook />, url: "#" },
  { name: "Instagram", icon: <Instagram />, url: "#" },
  { name: "YouTube", icon: <YouTube />, url: "#" },
  { name: "LinkedIn", icon: <LinkedIn />, url: "#" },
  { name: "X", icon: <X />, url: "#" },
  { name: "TikTok", icon: <TikTok />, url: "#" },
];

const drawerWidth = 300;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Seuil dédié au logo : en dessous de 640px, même le mode "mobile"
  // (logo + burger seuls) n'a plus assez de place pour le texte complet.
  const isCompact = useMediaQuery(theme.breakpoints.down(640));
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: {xxs:"0.5", xs: 1.5, sm: 2 },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              minWidth: 0,
              whiteSpace: "nowrap",
              fontSize: {xxs:"0.5", xs: "1rem", sm: "1.25rem" },
             
            }}
            onClick={() => scrollToSection("home")}
          >
            DANSE{" "}
            {!isCompact && (
              <Box component="span" sx={{ color: "primary.main" }}>
                CONTEMPORAINE
              </Box>
            )}
          </Typography>

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
                
                // sx={{marginRight:"1rem" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu mobile : ouvre à droite, bouton de fermeture à droite,
          logo + navigation + réseaux sociaux + footer complet. */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
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

          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            DANSE{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              CONTEMPORAINE
            </Box>
          </Typography>

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
            © {new Date().getFullYear()} Danse Contemporaine. Tous droits
            réservés.{" "}
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

      <Box component="main" sx={{ pt: 8 }}>
        {children}
      </Box>
    </>
  );
};