import {
  createTheme,
  type PaletteMode,
  type ThemeOptions,
} from "@mui/material/styles";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: "#00ff88",
      contrastText: "#000",
    },
    ...(mode === "dark"
      ? {
          background: {
            default: "#001133",
            paper: "#000822",
          },
          text: {
            primary: "#ffffff",
            secondary: "rgba(255, 255, 255, 0.7)",
          },
          divider: "rgba(255, 255, 255, 0.1)",
        }
      : {
          background: {
            // léger bleu-gris, écho de la teinte navy du mode dark
            // (au lieu d'un gris générique)
            default: "#eef2fa",
            paper: "#ffffff",
          },
          text: {
            // même navy que le fond du mode dark, utilisé cette fois en
            // texte : garde une vraie identité de marque au lieu d'un
            // noir/gris MUI par défaut
            primary: "#001133",
            secondary: "rgba(0, 17, 51, 0.65)",
          },
          divider: "rgba(0, 17, 51, 0.12)",
        }),
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, letterSpacing: "0.02em" },
    h2: { fontWeight: 700, letterSpacing: "0.01em" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none", fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border:
            mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 17, 51, 0.12)",
          // une carte blanche sans ombre se voit à peine sur fond clair :
          // on ajoute une ombre douce uniquement en mode light.
          boxShadow:
            mode === "dark" ? "none" : "0 2px 12px rgba(0, 17, 51, 0.08)",
        },
      },
    },
  },
});

export const getTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
