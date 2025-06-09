import "@/routes/pages/components/StickersPanel/StickersPanel.css";
import React from "react";
import cardsData from "@/data/CardsData";
import { useState } from "react";

function StickersPanel() {
  const [textareas, setTextAreas] = useState(cardsData);

  return (
    <div className="wrapper d-flex flex-column align-items-center gap-4">
      <button className="btn btn-primary">Добавить стикер</button>
      {textareas.map((item, index) => (
        <textarea
          key={index}
          id={item.id}
          name={'textarea' + index}
          style={{ backgroundColor: item.background, color: item.color }}
          value={item.value}
          className="textareaPanel"
          onChange={(e) => {
            setTextAreas((prev) =>
              prev.map((el) =>
                el.id === item.id ? { ...el, value: e.target.value } : el
              )
            );
          }}
        ></textarea>
      ))}
    </div>
  );
}

export default StickersPanel;
