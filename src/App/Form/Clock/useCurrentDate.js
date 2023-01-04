import { useState, useEffect } from "react";

export const useCurrentDate = (setDate) =>{
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        };
    }, []);
};