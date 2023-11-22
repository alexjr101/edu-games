import { FormEventHandler } from 'react';
import styles from '../auth.module.css';

export default function RegisterForm() {

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    return <form className={styles.form} onSubmit={submit}>

        <label htmlFor='username'>Username</label>
        <input
            type="text" 
            id='username'
            name='username'
            autoComplete='username'
        />

        <label>Password</label>
        <input
            type="password" 
            id='password'
            name='password'
            autoComplete='off'
        />
    
        <label>Confirm Password</label>
        <input
            type="password" 
            id='confirm_password'
            name='confirm_password'
            autoComplete='off'
        />

        <label>Email</label>
        <input
            type="email" 
            id='email'
            name='email'
            autoComplete='email'
        />

        <button type="submit">Register</button>
    </form>;

}