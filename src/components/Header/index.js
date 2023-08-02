import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://i.ibb.co/g3mCw2m/img11.jpg"
      alt="title"
      className="image"
    />
    <ul className="nav-menu">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/package">Packages</Link>
      </li>
      <li className="nav-link">
        <Link to="/book">BookNow</Link>
      </li>
      <li className="nav-link">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
