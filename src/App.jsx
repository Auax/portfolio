import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Outlet,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects/Projects";
import Menu from "./components/Menu/Menu";
import styled from "styled-components";

const menuItems = [
    {label: 'Home', section: 'home'},
    {label: 'Projects', section: 'projects'},
    {label: 'Contact', section: 'contact'},
];

const StyledMenu = styled(Menu)`
  position: fixed;
  z-index: 10;
  left: 50px;
  bottom: 30px;
`;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={
                <>
                    <StyledMenu items={menuItems}/>
                    <Home/>
                    <Projects/>
                </>
            }
            />
            <Route path="/projects" element={<Projects/>}/>
            {/*<Route path="503" element={<ServiceUnavailable/>}/>*/}
            {/*<Route path="*" element={<NotFoundPage/>}/>*/}
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
