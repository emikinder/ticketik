import { useState, useEffect } from "react";
import { baseUrl } from "./UtilsAPI";

export function useFetch(custom) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url =
            baseUrl +
            custom +
            "client_id=" +
            import.meta.env.VITE_API_CLIENT_ID;
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
