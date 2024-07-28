import { useEffect, useState } from "react";
import { SearchBox, SearchHistory, Weather, ThemeOption } from "./components";
import "./index.scss";
import moment from "moment";
import { Constants, apiServices } from "./services";
import cityList from "./assets/mockdata/city.list.json";

function App() {
  const [weather, setWeather] = useState();
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      setTheme(selectedTheme);
    }
  }, []);
  const onCheckWeather = async (city) => {
    const cityId = cityList.find(
      (c) => c.name.toLowerCase() === city.toLowerCase()
    );

    try {
      const response = await apiServices.get("/data/2.5/weather", {
        params: {
          q: cityId ? undefined : city,
          id: cityId?.id,
          units: "metric",
          appid: Constants.API_KEY,
        },
      });
      setWeather(response);
      const newSearchList = [...searchList];
      newSearchList.unshift({
        name: response.name,
        country: response.sys.country,
        time: moment().format(Constants.TIME_FORMAT),
      });

      setSearchList(newSearchList);
      setError("");
    } catch (e) {
      console.log(e);
      setError("City not found");
    }
  };

  const onRemoveCity = (index) => {
    const newSearchList = [...searchList];
    newSearchList.splice(index, 1);
    setSearchList(newSearchList);
  };

  const onThemeChange = (theme) => {
    setTheme(theme);
  };

  return (
    <div className={"page-container"}>
      <ThemeOption onThemeChange={onThemeChange} />
      <div className="page-content">
        <SearchBox onCheckWeather={onCheckWeather} />
        {error && <p>{error}</p>}
        {weather && (
          <div className="weather-wrap">
            <Weather weather={weather} />
            <SearchHistory
              list={searchList}
              onCheckWeather={onCheckWeather}
              onRemoveCity={onRemoveCity}
              theme={theme}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
