import React, { useState } from "react";
import { Product, ProductItem } from "./Product";
import styles from "./App.module.css";

function App() {

    const [productName, setProductName] = useState<string>("");
    const [price, setPrice] = useState<number>(500);
    const [inStock, setInStock] = useState<boolean>(false);

    const [products, setProducts] = useState<Product[]>([
        { name: "iPhone 12", price: 699, inStock: true },
        { name: "iPhone 12 Pro", price: 999, inStock: true },
        { name: "iPhone 12 Pro Max", price: 1099, inStock: true },
        { name: "Samsung Galaxy S20", price: 799, inStock: true },
        { name: "Samsung Galaxy S10", price: 699, inStock: false },
        { name: "Samsung Galaxy S20 Ultra", price: 999, inStock: true },
        { name: "Huawei P30", price: 499, inStock: true },
        { name: "Huawei P40", price: 599, inStock: true },
        { name: "Nokia 3310", price: 399, inStock: false },
    ]);

    const addProduct = () => {
        setProducts([...products, { name: productName, price, inStock }]);
        setProductName("");
        setPrice(500);
        setInStock(false);
    };

  return (
    <div className={styles.App}>
        <h1>Product Inventory</h1>
        <label className={styles.formLabel}>
            Product name:
                <input type="text"
                       value={productName}
                       placeholder="product name"
                       onChange={(e) => setProductName(e.target.value)}
                       />
        </label>
        <label className={styles.formLabel}>
            Price:
            <input
            type="number"
            value={price}
            placeholder="price"
            onChange={(e) => setPrice(Number(e.target.value))}
            />
        </label>
        <label className={styles.formLabel}>
            In Stock?
            <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.value)}
            />
        </label>
    </div>
  )
}

export default App
