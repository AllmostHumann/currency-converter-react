import React from "react";
import "./style.css"

const Buttons = () => (
  <React.Fragment>
    <div>
      <button
        className="form__Button"
        type="submit"
      >
        Przelicz
      </button>
      <button
        className="form__Button"
        type="reset"
      >
        Reset
      </button>
    </div>
  </React.Fragment>
)

export default Buttons;