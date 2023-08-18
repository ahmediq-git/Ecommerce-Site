// TODO: REMOVE THIS
const products = [
    { name: 'Product A', minPrice: 10, maxPrice: 50, colors:'red' },
    { name: 'Product B', minPrice: 20, maxPrice: 60, colors: 'green' },
  ];

  const filter = {
    name: '',
    minPrice: '',
    maxPrice: 50,
    colors: '',
  };
  
  const filteredProducts = products.filter(product => {
    // replace filter with the action.payload
    return (
      (!filter.name || product.name.includes(filter.name)) &&
      (!filter.minPrice || product.minPrice >= filter.minPrice) &&
      (!filter.maxPrice || product.maxPrice <= filter.maxPrice) &&
      (!filter.colors || filter.colors.includes(product.colors))
    //   (!filter.colors || filter.colors.every(color => product.colors.includes(color)))
    );
  });
  
  console.log(filteredProducts);