import React, { useState } from "react";
import SuggestionList from "./SuggestionList";
import {searchForString} from './utils'
const AutoComplete = (props) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const { suggestions } = props;

  const onChangeHandler = (evt) => {
    const { value } = evt.currentTarget;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => {
        return suggestion.toLowerCase() === (value.toLowerCase())
      }
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    
    setInput(value);
  };

  const onClickHandler = (evt) => {
    const { innerText } = evt.currentTarget;
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(innerText);
  };

  const onKeyDownHandler = (evt) => {
    const { keyCode } = evt;
    if (keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        className="input-box"
      />
      <SuggestionList
        isShow={isShow}
        input={input}
        active={active}
        filtered={filtered}
        onClick={onClickHandler}
      />
    </>
  );
};
export default AutoComplete;
