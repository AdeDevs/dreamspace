import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if(showMenu) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [showMenu])
    return (
        <div className="nav-bar">
            <NavLink to="/"><h1 className="logo">Aesthetic</h1></NavLink>
            <ul className="desk-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#about">about us</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#porto">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <ul className="desk-nav extras">
                <li className="tel"><ion-icon name="call"></ion-icon> </li>
                <li id="en">(316) 333-7001</li>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className={`first`}></span>
                <span className={`second`}></span>
            </div>
            </ul>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li onClick={toggleMenu}><NavLink to="/">Home</NavLink></li>
                <li onClick={toggleMenu}><a href="#about">about us</a></li>
                <li onClick={toggleMenu}><a href="#services">services</a></li>
                <li onClick={toggleMenu}><a href="#porto">projects</a></li>
                <li onClick={toggleMenu}><a href="#contact">contact</a></li>
            </ul>
        </div>
    )
}