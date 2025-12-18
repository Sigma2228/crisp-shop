import "./Header.css";
import logo from "../../img/Group 2.png";
const Header = () => {
    return (
        <header>
            
            <ul id="header-list">
                <span><img src={logo} alt="" /></span>
                <li className="header-li">Home</li>
                <li className="header-li">Shop</li>
                <li className="header-li">Blog</li>
                <li className="header-li">Sale</li>
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