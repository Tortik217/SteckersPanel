import "@/routes/pages/components/StickersPanel/StickersPanel.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import cardsData from "@/data/CardsData";
import Sticker from "@/routes/pages/components/Stiker/Sticker.jsx";
import Modal from "../Modal/Modal";

function StickersPanel() {
  const [textareas, setTextAreas] = useState(() =>
      cardsData.map(el => ({ ...el, id: nanoid(5) }))
  );

  const [isActive, setModalActive] = useState(true);

  const changeHandler = (event, id) => {
    const newValue = event.target.value;
    setTextAreas(prev =>
        prev.map(el =>
            el.id === id ? { ...el, value: newValue } : el
        )
    );
  };

  const addSticker = () => {
    const newSticker = {
      id: nanoid(5),
      value: '',
      background: 'rgba(255, 255, 255, 0.8)',
      color: 'black',
      fontSize: '16px',
    };
    setTextAreas(prev => [...prev, newSticker]);
  };

  return (
      <div className="wrapper d-flex flex-column align-items-center gap-4">
        <button onClick={() => addSticker()} className="btn btn-primary">Добавить стикер</button>
        <button onClick={() => setModalActive(true)} className="btn btn-primary">Modal</button>
        <div className="stickers d-flex align-items-start flex-wrap gap-4">
          {textareas.map(item => (
              <Sticker key={item.id} item={item} changeHandler={changeHandler} />
          ))}
        </div>
        <Modal active={isActive} setActive={setModalActive} />
      </div>
  );
}

export default StickersPanel;
