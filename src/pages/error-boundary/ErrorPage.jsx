import {Box, Button, Typography} from '@mui/material'
import {Background} from '../../utils/ImageExport'

// quite heavy page requires lazy loading
const ErrorPage = ()=>{
    return(
        <Box sx={{position:'absolute', top:0, left:0, height: '100%', width:'100%', backgroundImage: `url(${Background['background']})`}}>
                <Box sx={{position:'absolute', top:0, left:0, height: '100%', width:'100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <Typography sx={{color: 'white', fontWeight:'bold', fontSize: 40, p:5}}>OOPS There has been an error</Typography>
                    <Button variant='contained' sx={{backgroundColor: '#ADD8E6', color: '#000000', fontSize: '2rem', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '2rem'}}>Click Here To Go Back</Button>
                </Box>
        </Box>
    );
}

export default ErrorPage;