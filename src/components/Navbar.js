import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _color: "top"
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 10 ? "null" : "blue";
            this.setState({ _color: backgroundcolor });
        });
    }
    render() {
        return (
            <div className={`navbar ${this.state._color}`}>
                <h4 onClick={this.props.scrollHome} className={`h4 ${this.state._color}`}>Boribay</h4>
                <div className="links">
                    <a className={`a ${this.state._color}`} onClick={this.props.scrollHome}>Home</a>
                    <a className={`a ${this.state._color}`} onClick={this.props.scrollInfo}>Features</a>
                    <Link to="/commands" style={{ textDecoration: 'none' }} className={`a ${this.state._color}`}>Commands</Link>
                    <a className={`a ${this.state._color}`} onClick={() => window.open('https://discord.gg/mK438vSJ')}>Contact</a>
                </div>
            </div >
        )
    }
}

export default Navbar