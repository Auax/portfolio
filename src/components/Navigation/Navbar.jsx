import {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Toggle menu

    return (
        <nav className="navbar">
            <div className="flex items-center h-full">
                <Link to="/" className="logo">
                    <span>Ibai Farina</span>
                </Link>
            </div>
            <div className="block sm:hidden mr-3">
                <button onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-primary">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className={`menu-content ${isOpen ? "block" : "hidden"}`}>
                <Link to="/choose" className="link-component"> <span>[ Contact ]</span></Link>
                <Link to="/choose" className="link-component"> <span>[ Projects ]</span></Link>
                <Link to="/choose" className="link-component"> <span>[ More ]</span></Link>
            </div>
        </nav>
    );
}

export default Navbar;
