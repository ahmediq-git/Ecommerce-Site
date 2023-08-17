import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import ProductCard from '../../components/ProductCard'

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

const Homepage = ()=>{
    const arr=Array(100).fill(<ProductCard productName={"Aromatherapy Essential Oil Diffuser"} price={300}/>)

    return(
        <div style={{ display: 'flex', margin: 20, flexDirection: 'row' }}>
            <div style={{ position: 'fixed', top: 90 }}>
                 <Filter/>
            </div>
            <div style={{ position: 'absolute', left: 300, top: 90}}>
                {<GridDisplay arr={arr}/>}
            </div>
        </div>
    );
}

export default Layout(Homepage);