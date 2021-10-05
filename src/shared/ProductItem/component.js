import React from 'react';
import './style.scss';

const ProductItem = ({
    key,
    title,
    price,
    brand,
    details,
    advantages,
    sizes,
    img,
    gender,
    id
}) => {
    return(
        <div className='productItem_section'>
            <img src={img} alt='product images' />
            <h4>{title}</h4>
            <h2>{price}</h2>
            <ul className='productItem_sizes'>
                {sizes.map((item,index) => {
                    return(
                        <li key={index}>{item}</li>
                    );
                })}
            </ul>
            <button>Love</button>
        </div>
    );
}

export default ProductItem;