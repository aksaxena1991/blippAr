import React from "react";
const SuggestionList = (props) => {
  const { isShow, input, active, filtered, onClick } = props;
  if (isShow && input) {
    if (filtered.length) {
      return (
        <ul className="autocomplete">
          {filtered.map((suggestion, index) => {
            let className;
            if (index === active) {
              className = "active";
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className="no-autocomplete">
          <em>Not found</em>
        </div>
      );
    }
  }
  return <></>;
};

export default SuggestionList;
