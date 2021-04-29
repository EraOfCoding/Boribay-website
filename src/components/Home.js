import React from 'react'
import '../styles/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mousePosX: 0,
            mousePosY: 0,
            bg_transition: '100ms',
            ref: this.props.rf,
        }
        this.handleMouseMove = this.handleMouseMove.bind()
    }

    handleMouseMove = (e) => {
        this.setState({ mousePosX: e.nativeEvent.clientX })
        this.setState({ mousePosY: e.nativeEvent.clientY })
        this.setState({ bg_transition: '100ms' })
    }

    handleMouseEnter = (e) => {
        this.setState({ mousePosX: e.nativeEvent.clientX })
        this.setState({ mousePosY: e.nativeEvent.clientY })
        this.setState({ bg_transition: '1s' })
    }

    handleMouseExit = () => {
        this.setState({ mousePosX: 0 })
        this.setState({ mousePosY: 0 })
        this.setState({ bg_transition: '1s' })
    }

    render() {
        return (
            <div ref={this.state.ref}>
                <div className="home">
                    <h1>Boribay</h1>
                    <h3>is awesome.</h3>
                    <button onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=735397931355471893&permissions=8&scope=bot')}>Invite</button>
                </div>
            </div >
        )
    }
}

export default Home