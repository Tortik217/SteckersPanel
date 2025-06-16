import React from "react";
import { useState, useEffect } from "react";
import "./Modal.css";

function Modal({ active, setActive, editingSticker, updateSticker }) {

  const [value, setValue] = useState('');
  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    if (editingSticker) {
      setValue(editingSticker.value || '');
      setBackground(editingSticker.background || '');
      setColor(editingSticker.color || '');
      setFontSize(parseInt(editingSticker.fontSize) || '');
    }
  }, [editingSticker]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSticker) {
      updateSticker({
        ...editingSticker,
        value,
        background,
        color,
        fontSize,
      });
      setActive(false);
    }
  };

  return (
    <div
      className={`${
        active ? "modal1 active" : "modal1"
      } d-flex flex-column align-items-center justify-content-center`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${
          active ? "modal1__content active" : "modal1__content"
        } d-flex flex-column align-items-center justify-content-center gap-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center justify-content-center gap-4"
        >
          <div className="actions d-flex flex-column align-items-start justify-content-center gap-4">
            <div className="input-container">
              <label htmlFor="value" className="label">
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  rows={10}
                  cols={30}
                  required
                  className="text-input"
                ></textarea>
              </label>
            </div>
            <div className="input-container">
              <label className="label">
                Background:&nbsp;
                <select value={background} onChange={(e) => setBackground(e.target.value)}>
                  <option disabled>Select</option>
                  <option value="red">red</option>
                  <option value="orange">orange</option>
                  <option value="yellow">yellow</option>
                  <option value="green">green</option>
                  <option value="aquamarine">aquamarine</option>
                  <option value="blue">blue</option>
                  <option value="purple">purple</option>
                </select>
              </label>
            </div>
            <div className="input-container">
              <label className="label">
                Color:&nbsp;
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                  <option disabled>Select</option>
                  <option value="red">red</option>
                  <option value="orange">orange</option>
                  <option value="yellow">yellow</option>
                  <option value="green">green</option>
                  <option value="aquamarine">aquamarine</option>
                  <option value="blue">blue</option>
                  <option value="purple">purple</option>
                </select>
              </label>
            </div>
            <div className="input-container">
              <label className="label">
                FontSize:&nbsp;
                <input
                  type="number"
                  min={2}
                  max={200}
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                />
              </label>
            </div>
          </div>
          <button type={"submit"} className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
