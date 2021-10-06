export const filterItems = (filterType, products) => {
    let productsInNewOrder;
    if (filterType === 'ascending'){
        productsInNewOrder = products.slice().sort((a,b) => a.price - b.price);
    } else if (filterType === 'descending') {
        productsInNewOrder = products.slice().sort((a,b) => b.price - a.price );
    }
    return productsInNewOrder;
};