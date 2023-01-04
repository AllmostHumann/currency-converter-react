import { useState, useEffect } from "react";
import { DigitalClock } from "./styled";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const formatedDate = date.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <DigitalClock>
            Dzisiaj jest
            {" "}
            {formatedDate}
        </DigitalClock>
    );
}

export default Clock;