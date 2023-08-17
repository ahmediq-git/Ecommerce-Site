import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// we can use forward ref here to obtain the value in this child

// DropdownArray is an array of objects with keys and values
export default function DropDown({label, DropdownArray}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={handleChange}
        >
          {
            DropdownArray.map((obj)=>{
                <MenuItem value={obj.key}>{obj.value}</MenuItem>
            })
          }
         
         
        </Select>
      </FormControl>
    </Box>
  );
}