import Product, {IProduct} from "./Product"
import styles from "../styles/ProductList.module.scss"
import React from 'react';
import Carousel from 'nuka-carousel';

interface IproductListProps {
    products: IProduct[]
}

const ProductList = (props: IproductListProps) => {
    return (
    
        <Carousel className={styles.productList}>{props.products.map((product, index) => <Product key={index} product={product}/>)}</Carousel>
    )
}

export default ProductList