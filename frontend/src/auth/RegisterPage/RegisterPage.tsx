import styles from '../auth.module.css';
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {

    return <div>
        <h2 className={styles.title}>Register</h2>
        <RegisterForm />
    </div>
}