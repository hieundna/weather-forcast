import React, { useRef, useState } from "react";
import SearchIcon from "../assets/img/search.svg";

const SearchBox = (props) => {
  const { onCheckWeather } = props;
  const [city, setCity] = useState("");
  const searchDebounce = useRef();
  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleEnterKeyToSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  const onSearch = () => {
    if (!searchDebounce.current && city) {
      onCheckWeather(city);
      setCity("");
      searchDebounce.current = setTimeout(() => {
        searchDebounce.current = undefined;
      }, 1000);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onCityChange}
        onKeyDown={handleEnterKeyToSearch}
      />
      <div className="search-btn">
        <img src={SearchIcon} onClick={onSearch} alt="search" />
      </div>
    </div>
  );
};

export default React.memo(SearchBox);
