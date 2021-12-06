import ".Header.css";
import logo from "../../Asset/logo.png"

const AppHeader = () => {
    return (
        <div className = "AppHeader">
            <div className="AppHeader-left">
                <img src={logo} alt="" />
                <a href="#">Features</a>
                <a href="#">About</a>
            </div>
            <div className="AppHeader-right">
            <a href="#">Sign up</a>
            <a href="#">Sign in</a>
            </div>

        </div>
        )
}

export default AppHeader;