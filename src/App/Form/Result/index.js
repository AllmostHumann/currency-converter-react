import { SectionLabel, SectionResult } from "./styled";

const Result = ({ result }) => (
  <SectionLabel>
    <SectionResult>
      Otrzymasz:
      {result !== undefined && (
        <>
          &nbsp;{result.sourceAmount?.toFixed(2)}&nbsp;PLN&nbsp;=
          {" "}
          {result.targetAmount?.toFixed(2)}&nbsp;{result.currency}
        </>
      )}
    </SectionResult>
  </SectionLabel>
);

export default Result;