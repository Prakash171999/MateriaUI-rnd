import React from "react";
import {
  Typography,
  ButtonGroup,
  Container,
  Button,
  styled,
  TextField,
  InputAdornment,
} from "@mui/material";
import { AccessAlarm, AccountCircle } from "@mui/icons-material";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "darkblue",
  },
}));

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

      <CustomButton
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("You clicked me!")}
        endIcon={<AccessAlarm />}
        // sx={{ fontSize: 30 }}
      >
        Submit main
      </CustomButton>

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

      {/* icon */}
      <br />
      <AccessAlarm />
      <br />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        error
        helperText="There is error here."
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="outlined"
        multiline
        maxRows={4}
        placeholder={"Multi placeholder"}
        defaultValue="This is multiline input"
      />
      <br />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Container>
  );
}
