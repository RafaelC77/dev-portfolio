import { ThemeProvider } from "styled-components";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Home />
      <About />
      <GlobalStyle />
    </ThemeProvider>
  );
}
