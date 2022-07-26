import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import {Button } from '@mui/material';


function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setForm(prevState => ({ ...prevState, [name]: value }));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(operations.register(form))
        setForm({ name: '', email: '', password: '' })
    };

  const { name, email, password } = form;

    return (
        <div>
            <h1>Register</h1>
        <form onSubmit={handleSubmit}>
                <label>Name
                    <input
            type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
                </label>
                <label>Email
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
                <Button variant="contained" type="submit">Register</Button>
            </form>
            </div>
)
}

export default Register;