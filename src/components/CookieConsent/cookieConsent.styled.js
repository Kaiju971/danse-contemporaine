import { styled } from "@mui/material/styles";
import { Dialog, Button, Typography, IconButton, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
// Pop-up centrée
export const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
        background: "rgba(0, 0, 0, 0.95)",
        color: "white",
        borderRadius: theme.shape.borderRadius * 2,
        maxWidth: "600px",
        width: "90%",
        margin: theme.spacing(2),
    },
}));
// Titre de la pop-up
export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 3),
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
}));
// Contenu de la pop-up
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2, 3),
}));
// Actions (boutons) en bas
export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    justifyContent: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
}));
// Texte principal
export const MainText = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    "& a": {
        color: "#00ff88",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));
// Bouton "Accepter"
export const AcceptButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(45deg, #00ff88 0%, #00e67a 100%)",
    color: "black",
    fontWeight: 700,
    padding: theme.spacing(1, 3),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        background: "linear-gradient(45deg, #00e67a 0%, #00cc6a 100%)",
    },
}));
// Bouton "Refuser"
export const RefuseButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "rgba(255, 255, 255, 0.5)",
    fontWeight: 600,
    padding: theme.spacing(1, 3),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.8)",
        background: "rgba(255, 255, 255, 0.05)",
    },
}));
// Bouton de fermeture (croix)
export const CloseButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    padding: theme.spacing(0.5),
}));
