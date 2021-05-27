import { Link, NavLink, useLocation } from "react-router-dom";

const actvStyle = {
  color: "orange",
};

function Header() {
  const location = useLocation();
  
  return (
    // <header className="top">
    //   {location.pathname === "/playlists" ?
    //     <p>Your Play Lists</p>
    //    : 
    //    <p>Your Song Lists</p>
    //   }
    // </header>  
        <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img alt="Carved Rock Fitness" src="/images/logo.png" />
              </Link>
            </li>
            <li>
              <NavLink activeStyle={actvStyle} to="/playlists">Playlists</NavLink>
            </li>
          </ul>
        </nav>
      </header>

  )

} 

export default Header;