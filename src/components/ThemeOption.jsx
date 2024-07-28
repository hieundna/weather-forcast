import { useEffect, useState } from "react";
import LightTheme from "../assets/img/light-theme.svg";
import DarkTheme from "../assets/img/moon.png";
const ThemeOption = (props) => {
  const [theme, setTheme] = useState("light");
  const { onThemeChange } = props;

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      setTheme(selectedTheme);
    }
  }, []);

  const onChangeTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    onThemeChange(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };
  return (
    <div className={`theme-toggle ${theme}`} onClick={onChangeTheme}>
      <img width={30} src={LightTheme} alt="day" />
      <img width={30} src={DarkTheme} alt="night" />
    </div>
  );
};

export default ThemeOption;
