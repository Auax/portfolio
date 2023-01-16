import {Route, Routes as SwitchRoutes} from "react-router-dom";
import Home from "./views/Home";

const Routes = () => {
    return (
        <SwitchRoutes>
            <Route path="/" element={<Home/>}/>
        </SwitchRoutes>
    )
}

export default Routes;