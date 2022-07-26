import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { FormControl, Box, Button, TextField } from '@mui/material';


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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label >Email
                    <input
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}/>
                    </label>
                   
                <label>Password
                    <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
            autoComplete='off'
                    />
                </label>
                <Button variant="contained" type="submit">Login</Button>
            </form>
            </div>
)
}

export default Login;