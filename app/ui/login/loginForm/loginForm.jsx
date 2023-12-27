"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/libs/actions";

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1>Admin Login</h1>
            <input type="text" placeholder="username" name="username" autoComplete="off" />
            <input type="password" placeholder="password" name="password" autoComplete="off" />
            <button>Login</button>
            {state && state}
        </form >
    );
};

export default LoginForm;