import React from "react";
import SearchItem from "./SearchItem";

const SearchHistory = (props) => {
  const { list, onCheckWeather, onRemoveCity, theme } = props;

  return (
    <div className="search-history">
      <p>Search History</p>
      {!!list.length &&
        list.map((item, index) => (
          <SearchItem
            item={item}
            index={index}
            onCheckWeather={onCheckWeather}
            onRemoveCity={onRemoveCity}
            theme={theme}
          />
        ))}
    </div>
  );
};

export default React.memo(SearchHistory);
