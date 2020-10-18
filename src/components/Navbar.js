import React from 'react';
import './Navbar.css';
import NavbarElement from './NavbarElement';

const elements = [
    {
        name: "Gastronomie",
        link: "#"
    },
    {
        name: "Culture",
        link: "#"
    },
    {
        name: "Balades",
        link: "#"
    },
    {
        name: "Evénements",
        link: "#"
    },
    {
        name: "Sorties Nocturnes",
        link: "#"
    }
]

class Navbar extends React.Component {

    render() {
        return (
            <nav className="Navbar">
                <a href="#">
                    <img src="" alt="Logo Lyon en un Week-end" className="logo" />
                </a>
                <ul className="NavbarList">
                    {elements.map(element => (
                        <NavbarElement key={element.name} {...element} />
                    ))}

                </ul>
            </nav>
        )
    }
}

export default Navbar;