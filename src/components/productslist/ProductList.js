import React from 'react';
import ProductItem from "../productitem/ProductItem";

const ProductList = (props) => {
    const {products} = props;
    return (
        <div>
            <main>
                <div className={"product-list"}>
                    {products.map((productItem) => (
                        <ProductItem key={productItem.id} productItem={productItem} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductList;