import { useState, useEffect } from "react";
import { DigitalClock } from "./styled";
import {useCurrentDate} from "./useCurrentDate"

const Clock = () => {
    const [date, setDate] = useState(new Date());
    useCurrentDate(setDate);

    const formatedDate = date.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <DigitalClock>
            Dzisiaj jest
            {" "}
            {formatedDate}
        </DigitalClock>
    );
}

export default Clock;