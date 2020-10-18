import React from 'react';
import './Navbar.css';

class NavbarElement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href={this.props.link}>
                <li className="NavbarElement">{this.props.name}</li>
            </a>
        )
    }
}

export default NavbarElement;