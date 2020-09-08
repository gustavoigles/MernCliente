import React, {useEffect} from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const Login = () => {
   
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = async data => {
        const response = await axios.post('http://localhost:5000/user/login', data)
        console.log(response)
    }
   
    useEffect( ()=>{

        getea();
        
    }, [] ) 

    const getea = async () => {
        const response = await axios.get('http://localhost:5000/user/a')
        console.log(response)
    }

    const limpiacook = async () => {
        const response = await axios.get('http://localhost:5000/user/logout')
        console.log(response)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  autoComplete="ÑÖcompletes">
                <input ref={register({ minLength: 4 })} name="nombre" type="text" placeholder="name"  autoComplete="ÑÖcompletes" required/>
                {errors.nombre && <span>Minimo 4 caracteres</span>}
                <input ref={register({ minLength: 4 })} name="username" type="text" placeholder="username"  autoComplete="new-text" required/>
                {errors.username && <span>Minimo 4 caracteres</span>}
                <input ref={register({ minLength: 6})} name="password" type="password" placeholder="password" required/>
                {errors.password && <span>Minimo 6 caracteres</span>}
                
                <button type="submit">Register</button>
               
            </form>
            <button onClick={limpiacook}>Logout</button>
        </div>
    );
};

export default Login;