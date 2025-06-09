import React from "react";

function Sticker({ item, changeHandler }) {
  return (
      <textarea
          id={item.id}
          style={{
            backgroundColor: item.background,
            color: item.color,
            fontSize: item.fontSize,
          }}
          value={item.value}
          className="textareaPanel"
          onChange={(e) => changeHandler(e, item.id)}
      />
  );
}

export default Sticker;
