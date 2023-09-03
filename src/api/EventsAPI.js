import { baseUrl } from "./UtilsAPI";

export async function getEvents() {
    const reponse = await fetch(
        baseUrl + "events?client_id=" + import.meta.env.VITE_API_CLIENT_ID,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await reponse.json();
    return data;
}
