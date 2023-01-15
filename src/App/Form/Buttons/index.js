import { Button } from "./styled";

const Buttons = ({ focusInput }) => (
  <div>
    <Button
      type="submit"
      onClick={focusInput}
    >
      Przelicz
    </Button>
    <Button
      type="reset"
    >
      Reset
    </Button>
  </div>
)

export default Buttons;