import React, {FC, useEffect, useState} from 'react';
import {IProductProps} from "../product/Product";
import Product from "../product/Product";

const Products:FC<any> = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products)
            });
    },[])


    return (
        <div>
            {
                products.map(({
                    images, id, thumbnail, category, brand, stock, rating, discountPercentage, price, description, title
                              }: IProductProps) => (<Product key={id} images={images} id={id} thumbnail={thumbnail} category={category} brand={brand} stock={stock} rating={rating} discountPercentage={discountPercentage} price={price} description={description} title={title}/>))

            }
        </div>
    );
};

export default Products;
