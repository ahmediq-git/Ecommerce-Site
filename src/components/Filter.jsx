import {
  Box,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {useEffect, useRef, useState} from 'react'

const Filter = ({filters}) => {

  // Renderchecker
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [colors, setColors] = useState([]);

  const count = useRef(0);
  useEffect(() => {
      count.current = count.current + 1;
      filters(name, minPrice, maxPrice, colors)
  });



  return (
    <Box
      sx={{
        width: 250,
        height: 510,
        backgroundColor: "#d3d3d3",
        borderRadius: 2,
        marginRight: 5,
      }}
    >
               <div>Rendered: {count.current}</div> 
                {/* Renderchecker */}
      <Typography
        sx={{
          color: "black",
          fontSize: 30,
          fontWeight: "bold",
          textDecorationLine: "underline",
          justifyContent: "center",
          p: 10,
          pt: 1,
          pb: 1,
        }}
      >
        Filters
      </Typography>
      <Typography
        sx={{
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          justifyContent: "center",
          p: 10,
          pt: 1,
          pb: 1,
          ml: 2,
        }}
      >
        Name
      </Typography>

      <TextField
        sx={{
          width: 200,
          height: 55,
          backgroundColor: "white",
          borderRadius: 2,
          marginLeft: 3,
        }}
        value={name}
      />

      <Typography
        sx={{
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          justifyContent: "center",
          p: 10,
          pt: 1,
          pb: 1,
          ml: 2,
        }}
      >
        Price
      </Typography>

      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            justifyContent: "center",
            mt: 2,
            mr: 2,
          }}
        >
          Between:
        </Typography>
        <TextField
          sx={{
            width: 100,
            height: 55,
            backgroundColor: "white",
            borderRadius: 2,
          }}
          type="number"
          value={minPrice}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            justifyContent: "center",
            mt: 2,
            mr: 2,
            ml: 5,
          }}
        >
          And:
        </Typography>
        <TextField
          sx={{
            width: 100,
            height: 55,
            backgroundColor: "white",
            borderRadius: 2,
          }}
          type="number"
          value={maxPrice}
        />
      </Box>

      <Typography
        sx={{
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          justifyContent: "center",
          p: 10,
          pt: 1,
          pb: 0,
          ml: 2,
        }}
      >
        Color
      </Typography>

      <FormGroup sx={{marginLeft:10}}>
        <FormControlLabel
          sx={{mb:-2}}
          control={<Checkbox defaultChecked />}
          label="Red"
        />
        <FormControlLabel
          sx={{mb:-2}}
          control={<Checkbox defaultChecked />}
          label="Green"
        />
        <FormControlLabel
          sx={{mb:-2}}
          control={<Checkbox defaultChecked/>}
          label="Blue"
        />
        <FormControlLabel
          sx={{mb:-2}}
          control={<Checkbox defaultChecked />}
          label="Yellow"
        />

        <FormControlLabel
          sx={{mb:-2}}
          control={<Checkbox defaultChecked />}
          label="Purple"
        />
      </FormGroup>
    </Box>
  );
};

export default Filter;
