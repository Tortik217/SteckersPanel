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

  const [isActive, setModalActive] = useState(null);
  const [editingSticker, setEditingSticker] = useState(null);

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

  const openEditModal = (item) => {
    setEditingSticker(item);
    setModalActive(true);
  };

  const removeSticker = (id) => {
    setTextAreas(prev => prev.filter(el => el.id !== id));
  };

    const updateSticker = (updatedSticker) => {
    setTextAreas(prev =>
      prev.map(el => el.id === updatedSticker.id ? updatedSticker : el)
    );
  };

  return (
      <div className="wrapper d-flex flex-column align-items-center gap-4">
        <button onClick={() => addSticker()} className="btn btn-primary">Add Sticker</button>
        <div className="stickers d-flex align-items-start flex-wrap gap-4">
          {textareas.map(item => (
              <Sticker 
              key={item.id} 
              item={item} 
              changeHandler={changeHandler} 
              openEditModal={openEditModal}
              removeSticker={removeSticker}
              />
          ))}
        </div>
        <Modal 
        active={isActive} 
        setActive={setModalActive} 
        editingSticker={editingSticker}
        updateSticker={updateSticker}/>
      </div>
  );
}

export default StickersPanel;
