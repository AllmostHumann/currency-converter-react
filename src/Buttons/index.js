import React from "react";
import "./style.css"

const Buttons = () => (
  <>
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
  </>
)

export default Buttons;