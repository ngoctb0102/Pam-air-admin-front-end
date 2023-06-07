import SearchBarStyle from "../public/style/SearchBar.module.css";
import searchIcon from "../img/searchIcon.png";
import React, { useRef, useImperativeHandle } from "react";
function SearchBar(props: { onClick: () => void }, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      returnInputValue: () => {
        return inputRef.current.value;
      },
      modifyInputValue: (e) => {
        inputRef.current.value = e;
      },
    };
  });
  return (
    <div className={SearchBarStyle.searchBarContainer}>
      <input
        key="search-bar"
        className={SearchBarStyle.searchBar}
        placeholder={"search"}
        ref={inputRef}
      />
      <img
        alt="error"
        className={SearchBarStyle.searchBarIcon}
        src={searchIcon.src}
        onClick={props.onClick}
      ></img>
    </div>
  );
}

export default React.forwardRef(SearchBar);
