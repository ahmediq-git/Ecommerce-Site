import {Typography, Button} from '@mui/material'
import {ItemImages} from '../../utils/ImageExport'
import Layout from '../../components/Layout'
import {useRef, useEffect} from 'react'

const ProductPage = (props)=>{
     // Renderchecker
     const count = useRef(0);
     useEffect(() => {
         count.current = count.current + 1;
     });
 
    return(
        <div style={{display: 'flex', flexDirection:'row', marginTop:100}}>
            <div style={{margin:20, border:'2px solid black'}}>
            <img
                // src={ItemImages[props.productName]}
                src={ItemImages["Aromatherapy Essential Oil Diffuser"]}
                style={{
                width: 400,
                height: 400,
                objectFit: "cover",
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3,
                }}
            />
            </div>
            <div style={{marginLeft: 20}}>
                <Typography sx={{fontSize:30, fontWeight:'bold', marginTop:2}}>Aromatherapy Essential Oil Diffuser</Typography>
                <Typography sx={{fontSize:20, fontWeight:'bold', marginTop:5}}>Color: Purple</Typography>
                <Typography sx={{fontSize:20, fontWeight:'bold', marginTop:1}}>Price: 123 PKR</Typography>
                <Typography sx={{fontSize:20, fontWeight:'bold', marginTop:1}}>Available Quantity: 10</Typography>
                <Typography sx={{fontSize:20, fontWeight:'bold', marginTop:1}}>SKU: H75P9DLZ</Typography>

                <Typography sx={{fontSize:20, fontWeight:'bold', mt: '30px'}}>Quantity</Typography>
                <div style={{display:'flex', flexDirection:'row', margin:20, marginLeft: 0}}>
                    <Button variant='contained' sx={{fontSize: 16, fontWeight:'bold', backgroundColor: 'grey'}}>-</Button>
                    <Typography sx={{marginTop: 1.25, marginLeft:4, marginRight: 4}}>0</Typography>
                    <Button variant='contained' sx={{fontSize: 16, fontWeight:'bold', backgroundColor: 'grey'}}>+</Button>
                </div>

                <Button variant='contained' sx={{fontSize: 16, fontWeight:'bold', backgroundColor: '#FFA500'}}>Add to Cart</Button>
                <div>Rendered: {count.current}</div> 
                {/* Renderchecker */}
            </div>
        </div>
    );
}

export default Layout(ProductPage);