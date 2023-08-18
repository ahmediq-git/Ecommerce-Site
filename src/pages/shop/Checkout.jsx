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

function createData(date, totalprice) {
  return { date, totalprice };
}

const rows = [
  createData("12/12/2023", '123'),
];

function Checkout() {
  // Renderchecker
  const count = useRef(0);
  useEffect(() => {
      count.current = count.current + 1;
  });

  
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 100, flexDirection:'column'}}>
    <h2 style={{color: "#660000"}}>Thank you for shopping with us</h2>
    <h1>These are your past Bills</h1>
    <TableContainer component={Paper} style={{width:1000, border:'1px solid black'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Total price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.totalprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography sx={{marginTop:3}}>Total Spent: 123</Typography>
    <div>Rendered: {count.current}</div> 
    {/* Renderchecker */}
    </div>
  );
}

export default Layout(Checkout);
