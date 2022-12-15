import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <span className="clock">
            Dzisiaj jest: {date.toLocaleString("pl", {weekday: "long", day: "numeric", month: "long", year: "numeric"})}, {date.toLocaleTimeString()}
        </span>
    );
}

export default Clock;