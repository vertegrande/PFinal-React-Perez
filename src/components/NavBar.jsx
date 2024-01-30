import {} from 'react';
import goodvibesLogo from '../assets/goodvibes.png';
const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
   <a className="p-2 navbar-brand"   to="/">
   <img src={goodvibesLogo} className="Good Vibes" alt="Good Vibes" style={{ width: "110px" }} to="/"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

 <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a className="nav-link" href="/materos">
        Termos y Mates
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/buzos">
        Buzos
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/remeras">
        Remeras
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/camisas">
        Camisas
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/sombreros">
        Sombreros
      </a>
    </li>
  </ul>

  <span className="d-none d-sm-block me-5">
    <span className="btn btn-dark position-relative">
      <a
        className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
        onClick={() => {
          // Aquí puedes agregar la lógica para manejar el evento de clic del botón del carrito
          // Por ejemplo, puedes abrir un modal, ejecutar una función, etc.
        }}
      >
        <i className="fa fa-shopping-cart" style={{ fontSize: '15px', transformOrigin: '0.5625em 0.5em' }}></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
      </a>
    </span>
  </span>
</div>
</div>

      </nav>
    );
  };
  
  export default NavBar;