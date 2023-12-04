import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const currenciesURL = "https://open.er-api.com/v6/latest/PLN";
                const response = await axios.get(currenciesURL);
                setRatesData({
                    date: response.data.time_last_update_utc,
                    rates: response.data.rates,
                    status: "success",
                });
            } catch (error) {
                setRatesData({
                    status: "error",
                });
            }
        };
        setTimeout(getRates, 1500);
    }, []);

    
    const loadingStatus = ratesData.status;

    return { ratesData, loadingStatus };
};
