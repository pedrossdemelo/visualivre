import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import styled from "styled-components";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  // This is done in order to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // TODO: Allow user to change to system default theme

  if (!mounted) return null;

  return (
    <StyledThemeButton onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun1 />}
    </StyledThemeButton>
  );
}

const StyledThemeButton = styled.button`
  position: relative;
  top: 0.125rem;
  cursor: pointer;
`;
