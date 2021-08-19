import React, { useState } from "react";
import { render } from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  // const tags = ["tag1", "tag2", "tag3"];

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  // const renderTags = () => {
  //   if (tags.length === 0) return "Теги не найдены";
  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      {/* {renderTags()} */}
      <span className={getBageclasses()}> {formCount()} </span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
