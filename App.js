import ThemeProvider from "./src/context/ThemeContext";
import LanguageProvider from "./src/context/LanguageContext";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </LanguageProvider>
  );
}
