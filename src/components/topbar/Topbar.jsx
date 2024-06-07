import "./topbar.scss"
import { FaUserAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Justin.</a>
                    <div className="itemContainer">
                    <FaUserAlt className="icon" />
                    <span>(678)301-9807</span> 
                        
                    </div>
                    <div className="itemContainer">
                    <FaMailBulk className="icon" />
                    <span>justinchrisblair@gmail.com</span> 
                        
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
