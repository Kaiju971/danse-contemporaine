import { IconButton, Tooltip } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useColorMode } from "./colorModeContext";

export const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      title={mode === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      <IconButton
        onClick={toggleColorMode}
        color="inherit"
        aria-label="Basculer le thème clair/sombre"
      >
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};
