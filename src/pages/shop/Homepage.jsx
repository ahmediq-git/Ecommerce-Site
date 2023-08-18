import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import ProductCard from '../../components/ProductCard'
import {useState, useRef, useEffect} from 'react'

import {connect} from 'react-redux'
import {getItems} from '../../redux/CombinedActions'

import {useDispatch, useSelector} from 'react-redux'

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

    const [name, setName]=useState('')
    const [min, setMin]=useState(0)
    const [max, setMax]=useState(0)
    const [colors, setColors]=useState([])
    

    const handleFilter=(name, minPrice, maxPrice, colors)=>{
        setName(name)
        setMin(minPrice)
        setMax(maxPrice)
        setColors(colors)
    }
    console.log(products)
    const arr=products.map((product, index)=><div key={index}><ProductCard productName={product.name} price={product.price}/></div>)

    // console.log(arr)
    return(
        <div style={{ display: 'flex', margin: 20, flexDirection: 'row' }}>

            <div style={{ position: 'fixed', top: 90 }}>
            <div>Rendered: {count.current}</div> 
            {/* Renderchecker */}
                 <Filter filters={handleFilter}/>
            </div>
            <div style={{ position: 'absolute', left: 300, top: 90}}>
                {<GridDisplay arr={arr}/>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
  products: state.market.products,
});

export default Layout(connect(mapStateToProps)(Homepage));