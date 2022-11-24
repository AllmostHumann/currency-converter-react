import "./style.css";

const Form = ({ children }) => (
    <fieldset className="form__fieldset">
        <legend
            className="form__legend">
            Currency conventer
        </legend>
        {children}
    </fieldset>
    
);

export default Form;