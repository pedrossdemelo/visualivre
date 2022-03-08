import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  ${variables};

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
    font-family: var(--inter);
    font-size: 1rem;
    scrollbar-width: thin !important;
    scrollbar-color: var(--scrollbar-thumb-moz) rgba(0, 0, 0, 0) !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    appearance: none;
    color: var(--fg-1);

    &::selection {
      background-color: var(--selection);
      color: var(--fg-1);
    }

    &:focus {
      outline: 2px solid var(--accent);

      &:not(:focus-visible) {
        outline: none;
      };
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--worksans);
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-1);
    overflow-x: hidden;
  };

  @media (pointer: fine) {
    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: none;
    }

    *::-webkit-scrollbar-thumb {
      box-sizing: content-box;
      background-color: none;
      border: 2px solid transparent;
      border-radius: 24px;
      box-shadow: var(--scrollbar-thumb);
    }

    *::-webkit-scrollbar-thumb:hover {
      box-shadow: var(--scrollbar-thumb-hover);
    }
  }

  .blur-img-cover {
    filter: blur(1rem) saturate(1.5) brightness(2) contrast(1.5);
  }
`;
