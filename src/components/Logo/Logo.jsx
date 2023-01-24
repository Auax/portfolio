import {Link} from "react-router-dom";
import "./Logo.css";

function Logo() {
    return (
        <Link to="/" className="logo">
            <span className="logo__title">Ibai Farina</span>
            <span className="logo__subtitle">イバイファリナ</span>
        </Link>
    );
}

export default Logo;
