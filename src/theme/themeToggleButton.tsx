import { styled } from "@mui/material/styles";
import { useColorMode } from "./colorModeContext";

const StyledWrapper = styled("div")`
  display: inline-flex;
  align-items: center;

  .btn-container {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-container svg {
    display: block;
    flex-shrink: 0;
  }

  .btn-color-mode-switch {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner {
    margin: 0;
    width: 130px;
    height: 30px;
    background: #e0e0e0;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
  }

  /* Texte "Dark" / "Light" en arrière-plan */
  .btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    color: #424242;
    line-height: 1;
  }

  /* Bouton glissant (pastille blanche/grise) */
  .btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 60px;
    height: 26px;
    background: #fff;
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #212121;
    transition: all 0.3s ease;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
  }

  .btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    margin: 0;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner {
    background: #151515;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 68px;
    background: #3c3c3c;
    color: #fff;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 14px;
    color: #aaa;
  }

  /* Version mobile / Tiroir */
  @media (max-width: 900px) {
    .btn-container svg {
      width: 18px;
      height: 18px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner {
      width: 90px;
      height: 26px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
      font-size: 10px;
      right: 10px;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
      width: 42px;
      height: 22px;
      font-size: 10px;
      left: 2px;
      top: 2px;
    }

    .btn-color-mode-switch
      input[type="checkbox"]:checked
      + label.btn-color-mode-switch-inner:after {
      left: 46px;
    }

    .btn-color-mode-switch
      input[type="checkbox"]:checked
      + label.btn-color-mode-switch-inner:before {
      left: 10px;
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
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#f5b400" }}
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>

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
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#8ab4f8" }}
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </svg>
      </div>
    </StyledWrapper>
  );
};
