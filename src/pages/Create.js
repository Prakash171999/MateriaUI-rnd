import React from "react";
import { Typography, ButtonGroup, Container } from "@mui/material";
import Button from "@mui/material/Button";

export default function Create() {
  return (
    <Container>
      {/* Typography */}
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        Create a New Note
      </Typography>

      {/* Buttons */}

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("You clicked me!")}
      >
        Submit
      </Button>

      {/* Button variant */}
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      {/* Button group */}
      <ButtonGroup color="secondary" variant="contained">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </Container>
  );
}
