import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="logo">
          <a className="" href="/#">
            <img src="./images/logo.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" className="active">
            <i className="fa-solid fa-bell"></i>
            <span className="nav-item">Alerts</span>
          </a>
        </li>
        <li>
          <a href="" className="active">
            <i className="fa-solid fa-graduation-cap"></i>
            <span className="nav-item">Training</span>
          </a>
        </li>
        <li>
          <a className="comming-soon" href="">
            <i className="fa-solid fa-gears"></i>
            <span className="nav-item">Automation</span>
          </a>
        </li>
        <li>
          <a className="comming-soon" href="">
            <i className="fa-solid fa-folder-open"></i>
            <span className="nav-item">Portfolio</span>
          </a>
        </li>
        <li>
          <a className="comming-soon" href="">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            <span className="nav-item">Trading</span>
          </a>
        </li>
        <li>
          <a className="profile" href="">
            <img className="profile-img" src="./images/madkour.png" alt="" />
            <div className="info">
                <h3 className="title">Moni Roy</h3>
                <p className="sub-title">Beginner</p>
            </div>
          </a>
        </li>
        <footer>
            street suite. 2.0
        </footer>
      </ul>
    </nav>
  );
}
export default Navbar;
