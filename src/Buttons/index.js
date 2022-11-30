import React from "react";
import "./style.css"

const Buttons = () => (
  <React.Fragment>
    <div>
      <button
        className="buttons__button"
        type="submit"
      >
        Przelicz
      </button>
      <button
        className="buttons__button"
        type="reset"
      >
        Reset
      </button>
    </div>
  </React.Fragment>
)

export default Buttons;