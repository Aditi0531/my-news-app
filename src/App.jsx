import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes here
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsSection from "./components/NewsSection";
import "./styles.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  return (
    <Router>
      <Navbar setSelectedGenre={setSelectedGenre} />
      <Container>
        <Box sx={{ paddingTop: 8 }}>
          <Routes>  {/* Use Routes instead of Switch */}
            <Route path="/:genre" element={<NewsSection genre={selectedGenre} />} />
            <Route path="/" element={<NewsSection genre={selectedGenre} />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
