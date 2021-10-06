const productFilters = {
    brandFilters : [
        {brand : 'BARDOT', active : true},
        {brand : 'COOPER', active : false},
        {brand : 'ALFANI', active : false}
    ],
    priceFilters : [
        {price : 'ascending', active : true},
        {price : 'descending', active : false},
    ],
    sizeFilters : [
        {size : 'S', active : true},
        {size : 'M', active : false},
        {size : 'L', active : false},
        {size : 'XL', active : false},
    ]
};

export default productFilters;