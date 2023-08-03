const NewsItem = ({ newsData }) => {
    console.log("newsData >>>", newsData);

    return (
        <>
            {newsData.map(({ author, title, publishedAt, urlToImage }) => (
                <div key={publishedAt}>
                    <h1>{author}</h1>
                    <h3>{title}</h3>
                    {urlToImage ? (
                        <img
                            src={urlToImage}
                            alt={title}
                            style={{
                                width: "600px",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        "Sorry image not found..."
                    )}
                </div>
            ))}
        </>
    );
};

export default NewsItem;
