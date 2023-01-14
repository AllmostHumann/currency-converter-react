import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "wczytywanie",
    });

useEffect(() => {
    const getRates = async () => {
        try {
            const response = await axios.get("https://api.exchangerate.host/latest?=basePLN");
            setRatesData({
                date: response.data.date,
                rates: response.data.rates,
                status: "sukces",
            });
        } catch (error) {
            setRatesData({
                status: "Coś się popsuło",
            });
        }
    };
    setTimeout(getRates, 3000);
},[]);

return ratesData;
};
