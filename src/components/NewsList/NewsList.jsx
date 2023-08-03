import { useState, useEffect } from "react";
import { fetchNewsData } from "../../api";
import NewsItem from "../NewsItem";
import { Box, Container, Grid } from "@mui/material";

const NewsList = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const { articles } = await fetchNewsData();
            setNewsData(articles);
        };

        getNews();
    }, []);

    console.log("newsData >>>", newsData);

    return (
        <Container maxWidth="xxl">
            <Box sx={{ flexGrow: 1, paddingTop: 12 }}>
                <Grid
                    container
                    spacing={2}
                    flexWrap="wrap"
                >
                    {newsData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <NewsItem newsData={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default NewsList;
