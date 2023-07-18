import { useMemo } from "react";
import styled from "styled-components";
import useCustomState from "../hooks/useCustomState";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { MainGlobalStyle, ThemedGlobalStyle, complusThemeFn } from "../theme";
import Header from "../components/Header";
import ChainBoxes from "../components/ChainBoxes";
import Footer from "../components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useCustomState<boolean>("darkMode", true);

  const toggleTheme = () => {
    setDarkMode((prevValue: boolean) => !prevValue);
  };

  function ThemeProvider({ children }: { children: React.ReactNode }) {
    const complusThemeObject = useMemo(
      () => complusThemeFn(darkMode),
      [darkMode]
    );

    return (
      <StyledComponentsThemeProvider theme={complusThemeObject}>
        {children}
      </StyledComponentsThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <MainGlobalStyle />
      <ThemedGlobalStyle />
      <Wrapper>
        <Header />
        <ChainBoxes />
        <Footer toggleTheme={toggleTheme} darkMode={darkMode} />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
