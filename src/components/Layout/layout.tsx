// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   IconButton,
//   Drawer,
//   Divider,
//   Link,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   useMediaQuery,
// } from "@mui/material";
// import LOGO from "../../assets/image/LOGO-removebg-preview.png"
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Facebook from "@mui/icons-material/Facebook";
// import Instagram from "@mui/icons-material/Instagram";
// import YouTube from "@mui/icons-material/YouTube";
// import { useState } from "react";
// import { useTheme } from "@mui/material/styles";
// import { ThemeToggleButton } from "../../theme/themeToggleButton";
// import { FooterText, FooterLink } from "../Footer/footer.styled";
// import LinkedIn from "@mui/icons-material/LinkedIn";
// import X from "@mui/icons-material/X";
// import TikTok from "@mui/icons-material/MusicNote";

// const navItems = [
//   { id: "home", label: "Accueil" },
//   { id: "about", label: "L'école" },
//   { id: "courses", label: "Nos cours" },
//   { id: "teachers", label: "Professeurs" },
//   { id: "gallery", label: "Galerie" },
//   { id: "schedule", label: "Planning" },
//   { id: "pricing", label: "Tarifs" },
//   { id: "contact", label: "Contact" },
// ];

// const socialLinks = [
//   { name: "Facebook", icon: <Facebook />, url: "#" },
//   { name: "Instagram", icon: <Instagram />, url: "#" },
//   { name: "YouTube", icon: <YouTube />, url: "#" },
//   { name: "LinkedIn", icon: <LinkedIn />, url: "#" },
//   { name: "X", icon: <X />, url: "#" },
//   { name: "TikTok", icon: <TikTok />, url: "#" },
// ];

// const drawerWidth = 300;

// export const Layout = ({ children }: { children: React.ReactNode }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isCompact = useMediaQuery(theme.breakpoints.down(640));
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     setMobileOpen(false);
//     // Petit délai pour laisser le temps au menu de se fermer proprement
//     setTimeout(() => {
//       document
//         .getElementById(sectionId)
//         ?.scrollIntoView({ behavior: "smooth" });
//     }, 50);
//   };

//   return (
//     <Box sx={{ width: "100%", minHeight: "100vh", position: "relative" }}>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: (theme) =>
//             theme.palette.mode === "dark"
//               ? "rgba(0, 0, 0, 0.2)"
//               : "rgba(255, 255, 255, 0.7)",
//           backdropFilter: "blur(10px)",
//           boxShadow: "none",
//           borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             px: { xxs: "0.5", xs: 1.5, sm: 2 },
//           }}
//         >
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               textTransform: "uppercase",
//               fontWeight: 700,
//               cursor: "pointer",
//               minWidth: 0,
//               whiteSpace: "nowrap",
//               fontSize: { xxs: "0.5", xs: "1rem", sm: "1.25rem" },
//             }}
//             onClick={() => scrollToSection("home")}
//           >
//             <img src={LOGO} alt="logo" width="30%" />
//             {/* cambaléa{" "} */}
//             {/* {!isCompact && (
//               <Box component="span" sx={{ color: "primary.main" }}>
//                 CONTEMPORAINE
//               </Box>
//             )} */}
//           </Typography>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: isMobile ? 1 : 3,
//               flexShrink: 0,
//             }}
//           >
//             {!isMobile &&
//               navItems.map((item) => (
//                 <Typography
//                   key={item.id}
//                   sx={{
//                     cursor: "pointer",
//                     color: "text.secondary",
//                     "&:hover": { color: "primary.main" },
//                   }}
//                   onClick={() => scrollToSection(item.id)}
//                 >
//                   {item.label}
//                 </Typography>
//               ))}

//             {!isMobile && <ThemeToggleButton />}

//             {isMobile && (
//               <IconButton
//                 color="inherit"
//                 aria-label="Ouvrir le menu"
//                 onClick={() => setMobileOpen(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         variant="temporary"
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         disableScrollLock // 🟢 1. Empêche le Drawer de bloquer le body
//         ModalProps={{
//           keepMounted: true,
//           disableScrollLock: true, // 🟢 2. Sécurité supplémentaire sur la Modal interne
//         }}
//         sx={{
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             background: theme.palette.background.paper,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             p: 2,
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <ThemeToggleButton />
//             <IconButton
//               onClick={() => setMobileOpen(false)}
//               aria-label="Fermer le menu"
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Typography
//             variant="h6"
//             align="center"
//             sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase" }}
//           >
//             cambaléa
//             <Box component="span" sx={{ color: "primary.main" }}></Box>
//           </Typography>

//           <Divider />

//           <List sx={{ flexGrow: 1 }}>
//             {navItems.map((item) => (
//               <ListItem key={item.id} disablePadding>
//                 <ListItemButton onClick={() => scrollToSection(item.id)}>
//                   <ListItemText primary={item.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           <Divider sx={{ mb: 2 }} />

//           <Box
//             sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}
//           >
//             {socialLinks.map((social) => (
//               <IconButton
//                 key={social.name}
//                 component={Link}
//                 href={social.url}
//                 aria-label={social.name}
//                 sx={{
//                   background: "rgba(0, 255, 136, 0.1)",
//                   "&:hover": { background: "rgba(0, 255, 136, 0.2)" },
//                 }}
//               >
//                 {social.icon}
//               </IconButton>
//             ))}
//           </Box>

//           <FooterText variant="body2" align="center" sx={{ mt: 1 }}>
//             © {new Date().getFullYear()} Danse Contemporaine. Tous droits
//             réservés.{" "}
//             <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
//             {" - "}
//             <FooterLink href="/confidentialite">
//               Politique de confidentialité
//             </FooterLink>
//           </FooterText>

//           <Typography
//             variant="caption"
//             component="p"
//             align="center"
//             sx={{ color: "text.secondary", mt: 1 }}
//           >
//             Site conçu par SWAM Concept
//           </Typography>
//         </Box>
//       </Drawer>

//       <Box component="main" sx={{ pt: 8, width: "100%" }}>
//         {children}
//       </Box>
//     </Box>
//   );
// };

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
import  LogoApp  from "../../components/Logo/logoApp";
import LOGO from "../../assets/image/LOGO-removebg-preview.png";
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
            px: { xxs: "0.5", xs: 1.5, sm: 2 },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              cursor: "pointer",
              minWidth: 0,
              whiteSpace: "nowrap",
              fontSize: { xxs: "0.5", xs: "1rem", sm: "1.25rem" },
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => scrollToSection("home")}
          >
            {/* ✅ Logo avec inversion en dark mode */}
            <LogoApp logo={LOGO} size={isCompact ? 60 : isMobile ? 70 : 80} />
            <Box
              component="img"
              // src={LOGO}
              // alt="CAMBALÉA"
              sx={{
                width: { xxs: "90px", xs: "110px", sm: "130px" },
                height: "auto",
                filter:
                  theme.palette.mode === "dark"
                    ? "invert(1) brightness(1.2)"
                    : "none",
                transition: "filter 0.3s ease",
              }}
            />
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

          {/* ✅ Logo aussi dans le Drawer mobile */}
          <Box
            component="img"
             src={LOGO}
            alt="CAMBALÉA"
            onClick={() => scrollToSection("home")}
            sx={{
              width: "120px",
              height: "auto",
              margin: "0 auto 16px",
              cursor: "pointer",
              filter:
                theme.palette.mode === "dark"
                  ? "invert(1) brightness(1.2)"
                  : "none",
              transition: "filter 0.3s ease",
            }}
          />

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

      <Box component="main" sx={{ pt: 8, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};
