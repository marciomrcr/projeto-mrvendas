//function NavBar() { é igual a const NavBar = () => {
import dashboard from "assets/img/rivello.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/">
            <img src={dashboard} alt="DevSuperior" width="80" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
