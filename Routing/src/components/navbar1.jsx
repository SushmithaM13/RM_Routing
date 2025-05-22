import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar=()=>{
    const {isAuthenticated, logout}=useAuth();
    const {toggleTheme}=useTheme();

    return(
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
                {isAuthenticated ?
                (<button onClick={logout}>Logout</button>)
                :
                (
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="signUp">Sign Up</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;