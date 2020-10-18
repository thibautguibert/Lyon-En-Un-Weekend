import React from 'react';
import './Navbar.css';

class NavbarElement extends React.Component {

    render() {
        return (
            <li className="NavbarElement">
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }
}

export default NavbarElement;