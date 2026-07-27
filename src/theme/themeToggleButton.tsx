import { styled } from "@mui/material/styles";
import { useColorMode } from "./colorModeContext";

const StyledWrapper = styled("div")`
  .btn-container {
    padding-left: 0;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .btn-container i {
    display: inline-block;
    position: relative;
    top: -9px;
  }

  .btn-container svg {
    vertical-align: middle;
  }

  label {
    font-size: 15px;
    color: #424242;
    font-weight: 500;
    top: 3px;
  }

  .btn-color-mode-switch {
    display: inline-block;
    margin: 0px;
    position: relative;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner {
    margin: 0px;
    width: 150px;
    height: 30px;
    background: #e0e0e0;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    display: block;
    cursor: pointer;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    font-size: 15px;
    font-weight: 500;
    top: 7px;
    right: 20px;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 70px;
    height: 28px;
    background: #fff;
    border-radius: 26px;
    position: absolute;
    left: 1px;
    top: 1px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
  }

  .btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 150px;
    height: 30px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 0px;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner {
    background: #151515;
    color: #fff;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 80px;
    background: #3c3c3c;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 20px;
  }

  /* Version compacte : ce composant n'apparaît QUE dans le tiroir mobile
     en dessous de 900px (voir Layout.tsx, "!isMobile && <ThemeToggleButton />"
     pour le desktop). Cette media query cible donc automatiquement la
     bonne instance, sans avoir besoin de props ou de réglage manuel. */
  @media (max-width: 900px) {
    .btn-container svg {
      width: 20px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner,
    .btn-color-mode-switch input[type="checkbox"] {
      width: 90px;
      height: 26px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
      font-size: 11px;
      right: 12px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
      width: 40px;
      height: 22px;
      font-size: 11px;
      padding: 4px 0px;
    }

    .btn-color-mode-switch
      input[type="checkbox"]:checked
      + label.btn-color-mode-switch-inner:after {
      left: 48px;
    }

    .btn-color-mode-switch
      input[type="checkbox"]:checked
      + label.btn-color-mode-switch-inner:before {
      left: 12px;
    }
  }
`;

export const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <StyledWrapper>
      <div className="btn-container">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-sun-fill"
          fill="currentColor"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#f5b400", marginBottom: 10 }}
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>

        {/* Un seul label fonctionnel (relié via htmlFor), plus de label
            imbriqué dans un autre label (invalide en HTML). */}
        <div className="btn-color-mode-switch">
          <input
            checked={mode === "dark"}
            onChange={toggleColorMode}
            id="color_mode"
            name="color_mode"
            type="checkbox"
            aria-label="Basculer entre le mode clair et le mode sombre"
          />
          <label
            className="btn-color-mode-switch-inner"
            data-off="Light"
            data-on="Dark"
            htmlFor="color_mode"
          />
        </div>

        <svg
          viewBox="0 0 16 16"
          className="bi bi-moon-stars-fill"
          fill="currentColor"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#8ab4f8", marginBottom: 10 }}
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </svg>
      </div>
    </StyledWrapper>
  );
};
