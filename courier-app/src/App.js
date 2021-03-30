import React, { Fragment } from 'react';
import AppNavbar from './Components/Courier/AppNavbar';
import Login from './Components/Security/Login';
import { useStateValue } from './context/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecurityRoute from './Components/Security/SecurityRoute'
function App() {
  const [{ userSesion}, dispatch] = useStateValue();
  
  return (
    <Fragment>
        <Router>
            <Switch>
                <Route exact path="/auth/login" component={Login} />

                <SecurityRoute 
                  exact 
                  path = "/Dashboard"
                  component = {AppNavbar}
                />
            </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
