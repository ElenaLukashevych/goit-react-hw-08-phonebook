import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import s from './Login.module.css';


function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const dispatch = useDispatch();

    
    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setForm(prevState => ({ ...prevState, [name]: value }));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(operations.logIn(form))
        setForm({ email: '', password: '' })
    };

  const { email, password } = form;

    return (
        <div>
            <h2 className={s.title}>Login</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                <label >Email
                    <input className={s.input}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}/>
                    </label>
                   
                <label>Password
                    <input className={s.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
            autoComplete='off'
                    />
                </label>
                <button className={s.button} type="submit">Login</button>
            </form>
            </div>
)
}

export default Login;