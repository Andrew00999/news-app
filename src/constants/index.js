import axios from "axios";

/*----------- CONFIGURATION OBJECTS ------------*/
const fetchData = {
    url: "https://newsapi.org/v2/everything",
    params: {
        q: "bitcoin",
        apiKey: "d6d668d41ff24c5e8d24c15b67e7008b",
    },
};

/*----------- AXIOS INSTANCE ------------*/
export const newsInstance = axios.create({
    baseURL: fetchData.url,
    method: "GET",
    params: fetchData.params,
});
