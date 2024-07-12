import React from 'react';
import './FancyText.css';

function FancyText({title, text}) {
  return (
    <div className={title === "true" ? "title-text" : "normal-text"}>
      {text}
    </div>
  );
}

export default FancyText;