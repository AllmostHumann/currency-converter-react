import { SectionLabel, SectionResult, SectionValue } from "./styled";

const Result = ({ result }) => (
    <SectionLabel>
        <SectionResult>
            Otrzymasz:
            <SectionValue>
                {result}
            </SectionValue>
        </SectionResult>
    </SectionLabel>
);

export default Result;