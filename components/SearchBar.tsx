import SearchBarStyle from "../public/style/SearchBar.module.css";
import searchIcon from "../img/searchIcon.png";
export default function SearchBar() {
  return (
    <div className={SearchBarStyle.searchBarContainer}>
      <input
        key="search-bar"
        className={SearchBarStyle.searchBar}
        placeholder={"search"}
      />
      <img
        alt="error"
        className={SearchBarStyle.searchBarIcon}
        src={searchIcon.src}
      ></img>
    </div>
  );
}
