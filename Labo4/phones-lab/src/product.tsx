import React from "react";
import styles from "./App.module.css";

interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

interface ProductProps {
    product : Product;
}

export const ProductItem: React.FC<ProductProps> = ({product}) => {
    return(
        <li className={product.inStock? styles.inStock : styles.outOfStock}>
            {product.name} - € {product.price}
        </li>
    );
};