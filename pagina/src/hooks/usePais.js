import { useEffect, useState } from "react";

export const usePais = () => {
    const [pais, setPais] = useState([]);

    useEffect (() =>{
        fetch('https://amazon-api.sellead.com/country')
        .then((response) => response.json())
        .then((data) => setPais(data));
    }, []);

    return {
        pais
    };
};