import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";

import notFound from "../../images/not-found.png";

const NewsItem = ({ newsData }) => {
    return (
        <Card
            sx={{ maxWidth: 345, margin: "0 auto" }}
            key={newsData.publishedAt}
        >
            {newsData.urlToImage ? (
                <CardMedia
                    component="img"
                    alt={newsData.title}
                    height="200"
                    image={newsData.urlToImage}
                />
            ) : (
                <CardMedia
                    component="img"
                    alt="Not Found"
                    height="200"
                    image={notFound}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {newsData.title}
                </Typography>
                <Typography gutterBottom variant="h6">
                    {newsData.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {newsData.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ cursor: "pointer" }}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default NewsItem;
