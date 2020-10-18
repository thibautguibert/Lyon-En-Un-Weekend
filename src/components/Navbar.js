import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="Navbar">
                <a href="#">
                    <img src="" alt="Logo Lyon en un Week-end" />
                </a>
                <ul className="NavbarList">

                </ul>
            </nav>
        )
    }
}

export default Navbar;