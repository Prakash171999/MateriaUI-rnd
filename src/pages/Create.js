import React from "react";
import {
  Typography,
  ButtonGroup,
  Container,
  Button,
  styled,
  TextField,
  InputAdornment,
  Paper,
  Box,
  Grid,
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#69eede",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  gap: 20,
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
      <hr />
      <br />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
