import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (

        <div className="Navbar">

            <nav className="nav">
                {/**profile*/}
                <div className="Profile">
                    <img src="https://i.pinimg.com/originals/98/6e/1e/986e1ebe461eded2eaa15fedb0f9bd76.jpg"></img>
                </div>
                {/**Nav bar */}
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to='/homepage' exact activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' exact activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/portfolios' exact activeClassName="active">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/blog' exact activeClassName="active">Blogs</NavLink>
                    </li>    <li className="nav-item">
                        <NavLink to='/contact' exact activeClassName="active">Contact</NavLink>
                    </li>
                </ul>

            {/**Footer */}
            <footer className="footer">
                <p>
                    @2021
                </p>
            </footer>
            </nav>
        </div>
    )
}

export default Navbar
