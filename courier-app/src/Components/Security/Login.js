import React, { useState } from 'react';
import Loading from '../Loading';
import {LoginUser} from '../../actions/CourierAction';
import { withRouter } from 'react-router-dom';
import { useStateValue } from '../../context/store';

const Login = ({ history }) => {

    const [{ userSesion}, dispatch] = useStateValue();

    const [ user, setUser ] = useState({
         username:'',
         password:''
    });
    const [ charging, setCharging ] = useState(false);

    const { username, password} = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setCharging(true)

        LoginUser(user, dispatch).then(response =>{
            console.log(response);
            if(response.data.success){
                history.push("/Dashboard");
            }
            setCharging(false)
        });
        
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
                                                onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input  
                                                type="password" 
                                                className="form-control" 
                                                name="password" 
                                                value={password}
                                                onChange={handleChange}/>
                                        </div>

                                        <div className="form-group m-0">

                                            {charging === true
                                            ? <Loading />
                                            : (
                                                <button className="btn btn-primary btn-block"> 
                                                Login
                                                </button>
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