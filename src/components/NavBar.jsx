import { NavLink } from 'react-router-dom';
import goodvibesLogo from '../assets/goodvibes.png';
import CartWidget from "./CartWidget";


const NavBar = () => {
  // Función para imprimir la ruta al hacer clic en un enlace
  const logRouteOnClick = (route) => {
    console.log("Se hizo clic en la ruta:", route);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="p-2 navbar-brand" to="/" onClick={() => logRouteOnClick("/")}>
          <img src={goodvibesLogo} className="Good Vibes" alt="Good Vibes" style={{ width: "110px" }} />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
<NavLink to="/category/buzos" className="nav-link">Buzos</NavLink>

            </li>
            <li className="nav-item">
<NavLink to="/category/buzos" className="nav-link">Buzos</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="category/remeras">
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="category/camisas">
                Camisas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="category/sombreros" >
                Sombreros
              </NavLink>
            </li>
          
          </ul>

          <span className="d-none d-sm-block me-5">
            <span className="btn btn-dark position-relative">
              <NavLink className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" to="/cart" onClick={() => logRouteOnClick("/carrito")}>
                <i className="fa fa-shopping-cart" style={{ fontSize: '15px', transformOrigin: '0.5625em 0.5em' }}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-secondary"> <CartWidget /></span>
              </NavLink>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
