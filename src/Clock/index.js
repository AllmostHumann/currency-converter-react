import "./style.css";
import { useState, useEffect } from "react";

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
        <p className="clock">
            Dzisiaj jest: {formatedDate}
        </p>
    );
}

export default Clock;