import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-link">🍕 Home</button>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <button className="nav-link btn btn-link">🔓 Profile</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="nav-link btn btn-link">🔐 Login</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link">🔐 Register</button>
              </li>
            </>
          )}
        </ul>
        <span className="navbar-text ml-auto">
          <button className="btn btn-outline-info">🛒 Total: ${total.toLocaleString()}</button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;