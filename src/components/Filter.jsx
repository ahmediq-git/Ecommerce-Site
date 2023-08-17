import {Box, TextField, Typography} from '@mui/material'
import DropDown from './DropDown'

const Filter = () =>{
    return (
        <Box sx={{width: 250, height: 510, backgroundColor: '#d3d3d3', borderRadius:2, marginRight: 5}}>
            <Typography sx={{color:'black', fontSize: 30, fontWeight:'bold'}}>Filters</Typography>
        </Box>
    );
}

export default Filter;