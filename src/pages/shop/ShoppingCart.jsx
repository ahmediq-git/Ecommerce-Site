import Layout from "../../components/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from "@mui/material";

import {useRef, useEffect} from 'react'

function createData(name, price, quantity) {
  return { name, price, quantity };
}

const rows = [
  createData("abc", '123', 43),
  createData("abc", '123', 43),
  createData("abc", '123', 43),
];

function ShoppingCart() {
   // Renderchecker
   const count = useRef(0);
   useEffect(() => {
       count.current = count.current + 1;
   });
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 100, flexDirection:'column'}}>
    <h1>Shopping Cart</h1>
    <TableContainer component={Paper} style={{width:1000, border:'1px solid black'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography sx={{marginTop:3}}>Total Cost: 123</Typography>
    <Button variant="contained" sx={{marginTop:3, backgroundColor: '#FFA500'}}>Proceed to Checkout</Button>
    <div>Rendered: {count.current}</div> 
    {/* Renderchecker */}
    </div>
  );
}

export default Layout(ShoppingCart);
