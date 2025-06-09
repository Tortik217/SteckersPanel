import React from "react";
import './AddForm.css'

function AddForm({addSticker}) {
  return (
      <form action="#" className="d-flex flex-column gap-4">
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
        <button onClick={addSticker} className="btn btn-primary" type={"submit"}>Добавить стикер</button>
      </form>
  )
}

export default AddForm