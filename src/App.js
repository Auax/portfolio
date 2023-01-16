import Navbar from "./components/Navigation/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes/>
            </Router>
        </>
    );
}

export default App;
