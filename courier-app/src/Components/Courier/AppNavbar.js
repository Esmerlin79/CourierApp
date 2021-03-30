import React from 'react';
import { Fragment } from 'react';
import Packages from './Packages';
import { withRouter } from 'react-router-dom';
import { useStateValue } from '../../context/store';

const AppNavbar = ({ history }) => {
    
    const [{ userSesion}, dispatch] = useStateValue();

    const salirSesionApp = () => {
        dispatch({
            type: "SALIR_SESION"
        });
        history.push('/auth/login');
    }

    return ( 
        <Fragment>
            <div className="wrapper">

                <nav id="sidebar">
                    
                    <div className="sidebar-header">
                        <h3>App Courier</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Main Menu</p>

                        <li>
                            <a href="#">Paquetes Recibidos</a>
                        </li>

                        <li>
                            <a href="#" onClick={salirSesionApp}>Salir</a>
                        </li>
                    </ul>     
                </nav>

                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>   
                        </div>
                    </nav> <br /><br />
                    <div class="overlay"> </div>
                    <Packages />
                </div>

            </div>
        </Fragment>
     );
}
 
export default withRouter(AppNavbar);