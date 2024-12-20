import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function NewsSection({ genre }) {
  const getNewsData = (genre) => {
    switch (genre) {
      case "Technology":
        return ["Tech News 1", "Tech News 2", "Tech News 3"];
      case "Sports":
        return ["Sports News 1", "Sports News 2", "Sports News 3"];
      case "Health":
        return ["Health News 1", "Health News 2", "Health News 3"];
      case "Business":
        return ["Business News 1", "Business News 2", "Business News 3"];
      case "Entertainment":
        return ["Entertainment News 1", "Entertainment News 2", "Entertainment News 3"];
      default:
        return [
          "Tech News 1", "Tech News 2", "Sports News 1", "Health News 1", 
          "Business News 1", "Entertainment News 1"
        ];
    }
  };

  const newsData = getNewsData(genre);

  return (
    <Box className="news-section">
      <Typography variant="h4" gutterBottom>{genre} News</Typography>
      {newsData.map((news, index) => (
        <Paper key={index} className="news-item">
          <Typography variant="h5">{news}</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default NewsSection;
