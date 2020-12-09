import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/userService';

export default function LoginPage (props) {
    // component state goes here
        const [ formState, setFormState ] = useState({
            email: '',
            password: '',
        });
    // handler functions
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault(); // disable default behavior which reloads the page
        if(!formVaild()) return; // return; = stop program execution and get out of here!
        try {
            await login(formState);
            props.handleSignupOrLogin();
        } catch (error) {
            alert(error.message);
        }
    }

    // helper functions
    function formVaild() {
        return !!(formState.email && formState.password);
    }


    return (
        <main className='Page'>
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <input onChange={handleChange} name='email' placeholder='Email' value={formState.email} className='form-control' type="email"/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <input onChange={handleChange} name='password' placeholder='Password' value={formState.pw}  className='form-control'  type="password"/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <input disabled={!formVaild()} value='Login' className='form-control' type="submit"/>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}
