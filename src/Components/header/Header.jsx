import "./Header.css";
import logo from "../../img/Group 2.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            
            <ul id="header-list">
                
                <span><img src={logo} style={{zIndex: '999'}} alt="" /></span>
                <li className="header-li"><Link to="/" style={{color: '#ffffff'}}>HomePage</Link></li>
                <li className="header-li"><Link to="/products" style={{color: '#ffffff'}}>Products</Link></li>
                <li className="header-li"><Link to="/registration" style={{color: '#ffffff'}}>Registration</Link></li>
                <li className="header-li"><Link to="/catalog" style={{color: '#ffffff'}}>CatalogPage</Link></li>
                 <li className="header-li"><Link to="/login" style={{color: '#ffffff'}}>Login</Link></li>
                <li className="header-li">Contact US</li>
                <li className="header-li">Search</li>
                <div id="sign-wrap">
                <li className="sign-li">Sign In</li>
                <li className="sign-li">Create An Account</li>
                </div>
                </ul>
               
              
                 

        </header>
    )
}
export default Header;