import { useState } from 'react'
import styles from "./App.module.css"

interface ShoppingListItem {
    name: string;
    quantity: number;
}


const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([{
        name: "Aardappelen",
        quantity: 5
    }]);

    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")

    const addShoppingItem = () => {
        if (quantity < 1) {
            setError("Quantity should be above 0")
            setSuccess("");
        } else {
            setShoppingList([...shoppingList, {name: name, quantity: quantity}]);
            setSuccess("Item was Added");
            setError("");
        }
    };

    const removeShoppingItem = (index: number) => {
        let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
        setShoppingList(shoppingListCopy);
        setSuccess("Item was removed")
        setError("")
    }

    return(
        <div>
            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>{success}</div>}


            <div className={styles.shoppingAddForm}>
                <label>Name</label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Quantity</label>
                <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
            </div>
            <button onClick={addShoppingItem}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    shoppingList.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => {removeShoppingItem(index)}}>Remove</button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}

function App() {


    return (
        <ShoppingList/>
    )
}

export default App
