import React, {FC} from 'react';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export type IProductType = IProductProps & {children?:React.ReactNode}

const Product:FC<IProductType> = (props) => {

    let {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images

    } = props;

    return (
        <div>
            <h4>{id}</h4>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span>
            <p>{discountPercentage}</p>
            <p>{rating}</p>
            <p>{stock}</p>
            <span>{brand}</span>
            <h5>{category}</h5>
            <p>{thumbnail}</p>
            {
                images?.map((image, index)=> <img key={index} src={image} alt={title}/>)
            }
            <br/>
        </div>
    );
};

export default Product;
