import "./header.css";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <div className="branding">
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className="brand-name">Fraud Detection system </h2>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#awereness">Home</a>
          </li>
          <li>
            <a href="#detetction">Detection</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#result">Simulate</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
