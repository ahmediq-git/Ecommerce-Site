import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import ProductCard from '../../components/ProductCard'
import {useState, useRef, useEffect, useMemo} from 'react'

import {connect} from 'react-redux'


const GridDisplay = ({ arr }) => {
    const gridContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px', 
    };
  
    const gridItemStyle = {
      border: '1px solid #ccc',
      padding: '16px',
    };
  
    return (
      <div style={gridContainerStyle}>
        {arr.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  };

const Homepage = ({products})=>{

  // Renderchecker
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
  

    const arr=useMemo(()=>products.map((product, index)=><div key={index}><ProductCard productName={product.name} price={product.price} quantity={product.quantity} color={product.color} sku={product.sku}/></div>), [products])

    const Grid=useMemo(()=>GridDisplay, [arr])

    return(
        <div style={{ display: 'flex', margin: 20, flexDirection: 'row' }}>

            <div style={{ position: 'fixed', top: 90 }}>
            <div>Rendered: {count.current}</div> 
            {/* Renderchecker */}
                 <Filter />
            </div>
            <div style={{ position: 'absolute', left: 300, top: 90}}>
                {<Grid arr={arr}/>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
  products: state.market.products,
});

export default Layout(connect(mapStateToProps)(Homepage));