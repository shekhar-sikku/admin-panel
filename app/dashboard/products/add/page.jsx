import { addProduct } from '@/app/libs/actions';
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="cat" id="cat">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="other">Other</option>
                </select>
                <input type="number" placeholder="price" name="price" required />
                <input type="number" placeholder="stock" name="stock" required />
                <input type="text" placeholder="color" name="color" />
                <input type="text" placeholder="size" name="size" />
                <textarea required name="desc" id="desc" rows="16" placeholder="Description" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct;