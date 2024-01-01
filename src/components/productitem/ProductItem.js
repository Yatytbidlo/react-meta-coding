import React from 'react';

const ProductItem = (props) => {
    const {productItem} = props;
    return (
        <div className={"product-item"}>
            <img className={"product-item__img"} src={productItem.img} alt={productItem.name}/>
            <h3 className={"product-item__name"}>{productItem.name}</h3>
            <p className={"product-item__quantity"}>{productItem.quantity}</p>
            <p className={"product-item__year"}>{productItem.year}</p>
            <h4 className={"product-item__price"}>{productItem.price}</h4>
        </div>
    );
};

export default ProductItem;