import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import {LoginUser} from '../../actions/CourierAction';
import { withRouter } from 'react-router-dom';
import { useStateValue } from '../../context/store';
import Error from '../Error';

const Login = ({ history }) => {

    const [{ userSesion}, dispatch] = useStateValue();

    const [ user, setUser ] = useState({
         username:'',
         password:''
    });
    const [ charging, setCharging ] = useState(false);
    const [ messageError, setMessageError ] = useState(null)
    const [ fails, setFails ] = useState(0);
    const [ showButton, setShowButton ] = useState(false)

    const { username, password} = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() =>{
        if(fails >= 3){
            setMessageError("Fallo 3 veces no pude hacer login")
            setShowButton(true);
            setCharging(false)
        }
    }, [fails])
    const handleSubmit = e =>{
        e.preventDefault();  

        setCharging(true)
        if(username.length >= 10 ){
            setCharging(false)
            setMessageError("El nombre de usuario debe ser menor a 10 caracteres")
            return;
        }
        setMessageError(null)

        setTimeout(() =>{
            LoginUser(user, dispatch).then(response =>{
                console.log(response);
    
                if(response.data.success){
                    setFails(0);
                    history.push("/Dashboard");
                }else{
                    setFails(fails + 1);
                    setMessageError(response.data.exception)
                }
                setCharging(false)
            });
        }, 2000);
        
    }
    

    return (  
        <div className="my-login-page">
            <div className="h-100">
                <div className="container h-100">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="brand">
                                <img src="/images.png" width={50} height={80} alt="logo" />
                            </div>
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Login</h4>
                                    {messageError ? <Error message={messageError}/> : null}
                                    <form 
                                        className="my-login-validation" 
                                        onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <label>Username</label>
                                            <input  
                                                type="text" 
                                                className="form-control" 
                                                name="username" 
                                                value={username}
                                                onChange={handleChange} 
                                                pattern="[A-Za-z0-9]+"
                                                title="No se permite caracteres especiales"
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input  
                                                type="password" 
                                                className="form-control" 
                                                name="password" 
                                                value={password}
                                                onChange={handleChange}
                                                title="No se permite caracteres especiales"
                                                pattern="[A-Za-z0-9]+"
                                                />
                                        </div>

                                        <div className="form-group m-0">
                                        
                                            {showButton  ? null : (
                                                charging === true
                                                    ? <Loading />
                                                    : (
                                                        <button className="btn btn-primary btn-block"> 
                                                        Login
                                                        </button>
                                                    )
                                            )}
                                               
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="footer">
                                 Copyright &copy; Courier
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default withRouter(Login);