import React from "react";
import "./Sticker.css";

function Sticker({ item, changeHandler, removeSticker, openEditModal }) {


  return (
    <div className="sticker d-flex flex-column gap-1">
      <div className="action d-flex justify-content-between">
        <button onClick={() => openEditModal(item)} className="btn btn-warning">Edit</button>
        <button onClick={() => removeSticker(item.id)} className="btn btn-danger">Delete</button>
      </div>

      <textarea
        id={item.id}
        style={{
          backgroundColor: item.background,
          color: item.color,
          fontSize: `${item.fontSize}px`,
        }}
        value={item.value}
        className="textareaPanel"
        onChange={(e) => changeHandler(e, item.id)}
      />
    </div>
  );
}

export default Sticker;
