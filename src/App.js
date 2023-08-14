import "./css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);

  const light = "#ffffff";
  const mid = "#333333";
  const dark = "#000000";
  const [color, setColor] = useState(dark);
  const [background, setBackground] = useState(light);

  const lightIcon = <FontAwesomeIcon icon={faSun} size="2x" />;
  const darkIcon = <FontAwesomeIcon icon={faMoon} size="2x" />;
  const [icon, setIcon] = useState(lightIcon);

  const handleChangeTheme = () => {
    setTheme((prev) => !prev);

    if (theme) {
      setColor(dark);
      setBackground(light);
      setIcon(lightIcon);
    } else {
      setColor(light);
      setBackground(mid);
      setIcon(darkIcon);
    }
  };

  return (
    <>
      <Header
        color={color}
        background={background}
        icon={icon}
        changeTheme={handleChangeTheme}
      />
      <Main color={color} background={background} />
      <Footer />
    </>
  );
}

export default App;
