import React from 'react';
import './Navbar.css';


class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xcross: false
        };
    };

    render() {
        return (
            <button className={this.state.xcross ? "Burger xcross" : "Burger"}
                onClick={event => {
                    const newState = !this.state.xcross;
                    this.setState({ xcross: newState });
                    console.log(this.state.xcross);
                }} >
                <div className="bar" id="first-bar"></div>
                <div className="bar" id="second-bar"></div>
                <div className="bar" id="third-bar"></div>
            </button>
        )
    }
}

export default Burger;