// TODO: REMOVE THIS
const products = [
    { name: 'Product A', price:20, colors:'red' },
    { name: 'Product B', price:100, colors: 'green' },
  ];

  const filter = {
    name: '',
    minPrice: 20.01,
    maxPrice: 99.989,
    colors: '',
  };
  
  const filteredProducts = products.filter(product => {
    // replace filter with the action.payload
    return (
      (!filter.name || product.name.includes(filter.name)) &&
      (!filter.minPrice || product.price >= filter.minPrice) &&
      (!filter.maxPrice || product.price <= filter.maxPrice) &&
      (!filter.colors || filter.colors.includes(product.colors))
    //   (!filter.colors || filter.colors.every(color => product.colors.includes(color)))
    );
  });
  
  console.log(filteredProducts);