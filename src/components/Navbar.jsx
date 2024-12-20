import React, { useState } from "react";
import { AppBar, Toolbar, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, FormControl } from "@mui/material";
import { Link } from "react-router-dom";  // Correct usage

const genres = ["All", "Technology", "Sports", "Health", "Business", "Entertainment"];

function Navbar({ setSelectedGenre }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectGenre = (genre) => {
    setSelected(genre);
    setSelectedGenre(genre);
    handleClose();
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Button className="genre-btn" onClick={handleClickOpen}>Select Genre</Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="dialog-title">Select News Genre</DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <Select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                displayEmpty
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
            <Button onClick={() => handleSelectGenre(selected)} color="primary">Apply</Button>
          </DialogActions>
        </Dialog>

        <div className="genre-links">
          {genres.map((genre) => (
            <Link key={genre} to={`/${genre}`} className="genre-link">
              {genre}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
