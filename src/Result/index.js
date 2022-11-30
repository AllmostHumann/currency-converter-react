import "./style.css"

const Result = ({ result }) => (
    <section
        className="form__label">
        <label>
            Otrzymasz:
            <strong
                className="form__resultValue"
            >
                {result}
            </strong>
        </label>
    </section>
);

export default Result;