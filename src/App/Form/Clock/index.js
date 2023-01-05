import { DigitalClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const formatedDate = (date) => date.toLocaleString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <DigitalClock>
            Dzisiaj jest
            {" "}
            {formatedDate(date)}
        </DigitalClock>
    );
};

