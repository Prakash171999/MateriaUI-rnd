import React from "react";
import { Typography, ButtonGroup, Container, Button } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

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
        endIcon={<AccessAlarm />}
      >
        Submit
      </Button>

      {/* Button variant */}
      <Button
        type="submit"
        color="secondary"
        variant="outlin ed"
        startIcon={<AccessAlarm />}
      >
        Submit
      </Button>

      {/* Button group */}
      <ButtonGroup color="secondary" variant="contained">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <br />
      <AccessAlarm />
    </Container>
  );
}
