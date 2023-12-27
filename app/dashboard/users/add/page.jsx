import { addUser } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUser = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="username" name="username" required autoComplete="off" />
                <input type="email" placeholder="email" name="email" required autoComplete="off" />
                <input type="password" placeholder="password" name="password" required autoComplete="off" />
                <input type="phone" placeholder="phone" name="phone" autoComplete="off" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" rows="16" placeholder="Address" autoComplete="off" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;