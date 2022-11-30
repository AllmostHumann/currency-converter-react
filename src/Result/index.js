import "./style.css"

const Result = ({ result }) => (
    <section className="result__section">
        <label className="result__label">
            Otrzymasz:
            <strong
                className="result__value"
            >
                {result}
            </strong>
        </label>
    </section>
);

export default Result;