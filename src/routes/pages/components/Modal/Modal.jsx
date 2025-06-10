import React from "react";
import './Modal.css'

function Modal({active, setActive}) {
  return (
    <div onClick={() => setActive(false)} className="modal1 d-flex flex-column align-items-center justify-content-center">
      <div onClick={(e) => {e.stopPropagation}} className="modal1__content d-flex flex-column align-items-center justify-content-center gap-4">
        <form action="#" className="d-flex flex-column align-items-center justify-content-center gap-4">
        <div className="input-container">
          <label htmlFor="value" className='label'>
            <textarea
                name="value"
                id="value"
                value={'Jopiy'}
                rows={10}
                cols={30}
                required
                className="text-input"
            ></textarea>
          </label>
        </div>
        <div className="inpit-container">
          <label htmlFor="background" className='label'>Background:
            <select name="background" id="background">
              <option disabled={true} selected>Select</option>
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
        <div className="inpit-container">
          <label htmlFor="color" className='label'>Color:
            <select name="color" id="color">
              <option disabled={true} selected>Select</option>
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
        <div className="inpit-container">
          <label htmlFor="fontSize" className='label'>FontSize:
            <input type="number" min={2}/>
          </label>
        </div>
      </form>
      </div>
    </div>
      
  )
}

export default Modal