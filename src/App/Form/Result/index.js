import { SectionLabel, SectionResult, SectionValue } from "./styled";

const Result = ({ result }) => (
  <SectionLabel>
    <SectionResult>
      {result !== undefined && (
        <>
          Otrzymasz: {result.sourceAmount}&nbsp;PLN&nbsp; =
          {" "}
          <SectionValue>
            {result.targetAmount?.toFixed(2)}&nbsp;{result.currency}
          </SectionValue>
        </>
      )}
    </SectionResult>
  </SectionLabel>
);

export default Result;