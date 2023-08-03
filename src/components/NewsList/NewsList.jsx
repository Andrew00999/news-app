import { useState, useEffect } from "react";
import { fetchNewsData } from "../../api";
import NewsItem from "../NewsItem";

const NewsList = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const { articles } = await fetchNewsData();
            setNewsData(articles);
        };

        getNews();
    }, []);

    return (
        <>
            <NewsItem newsData={newsData} />
        </>
    );
};

export default NewsList;
