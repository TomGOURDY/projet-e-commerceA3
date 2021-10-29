import Product, {IProduct} from "./Product"
import styles from "../styles/ProductList.module.scss"
import React from 'react';
import Carousel from 'nuka-carousel';

interface IproductListProps {
    products: IProduct[]
}

const ProductList = (props: IproductListProps) => {
    return (
        <div className={styles.ProductList}>
            <Carousel>
                {props.products.map((product, index) => <Product key={index} product={product}/>)}
            </Carousel>
        </div>
    )
}

export default ProductList