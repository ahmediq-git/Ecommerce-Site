import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ()=>{
    return (
        <div style={{backgroundColor:'#FFC947', padding:'1rem', height: '7vh', position:'fixed', top:0, left:0, width:'100%',zIndex: 1000}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h2 style={{color: 'white', fontWeight: 'bold'}}>Welcome to the Store</h2>
                <ShoppingCartIcon style={{color:'white', fontSize:'40', marginTop:8, marginRight: 20}}/>
            </div>
        </div>
    );
}

export default Navbar;