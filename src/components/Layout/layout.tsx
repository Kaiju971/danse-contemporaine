import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";


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

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(10px)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            DANSE <span style={{ color: "#00ff88" }}>CONTEMPORAINE</span>
          </Typography>
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navItems.map((item) => (
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
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiPaper-root": { background: theme.palette.background.paper },
        }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ pt: 8 }}>
        {children}
      </Box>
    </>
  );
};
