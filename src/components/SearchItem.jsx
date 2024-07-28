import SearchIcon from "../assets/img/search-light.svg";
import SearchDarkIcon from "../assets/img/search-icon-dark.svg";
import DeleteIcon from "../assets/img/delete.svg";
import DeleteDarkIcon from "../assets/img/delete-dark.svg";
import { useEffect, useState } from "react";
const SearchItem = ({ item, onCheckWeather, onRemoveCity, index, theme }) => {
  const [searchIcon, setSearchIcon] = useState(SearchIcon);
  const [deleteIcon, setDeleteIcon] = useState(DeleteIcon);

  useEffect(() => {
    if (theme === "dark") {
      setSearchIcon(SearchDarkIcon);
      setDeleteIcon(DeleteDarkIcon);
    } else {
      setSearchIcon(SearchIcon);
      setDeleteIcon(DeleteIcon);
    }
  }, [theme]);
  return (
    <div className="search-item">
      <div className="search-item-detail">
        <span>{`${item.name}, ${item.country}`}</span>
        <span className="search-time">{item.time}</span>
      </div>
      <div className="search-action">
        <div className="action-icon" onClick={() => onCheckWeather(item.name)}>
          <img src={searchIcon} alt="search" />
        </div>
        <div className="action-icon" onClick={() => onRemoveCity(index)}>
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
