import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Cash Track</h1>
        </Link>
      </div>
    </header>
  );
}

export default NavbarComponent;