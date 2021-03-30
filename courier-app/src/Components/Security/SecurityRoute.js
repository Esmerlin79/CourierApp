import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStateValue } from '../../context/store';

const SecurityRoute = ({ component: Component, ...rest }) => {
    
    const [{ userSesion }, dispatch] = useStateValue();

    return ( 
        <Route 
          {...rest}  
          render = { (props) =>
            userSesion ?  (
                userSesion.authenticated === true ? (
                    <Component {...props} {...rest} />
                )
                : <Redirect to="/auth/login" />
            ):  <Redirect to="/auth/login" />
         }
        />
     );
}
 
export default SecurityRoute;