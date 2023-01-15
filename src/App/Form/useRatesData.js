import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "wczytywanie",
    });

useEffect(() => {
    const getRates = async () => {
        try {
            const currenciesURL = "https://api.exchangerate.host/latest?base=PLN";
            const response = await axios.get(currenciesURL);
            setRatesData({
                date: response.data.date,
                rates: response.data.rates,
                status: "succes",
            });
        } catch (error) {
            setRatesData({
                status: "error",
            });
        }
    };
    setTimeout(getRates, 1500);
}, []);

return ratesData;
};
