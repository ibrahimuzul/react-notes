import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Notes</h1>
                <button
                    onClick={() => this.props.handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
                    className='save'>Toggle Mode</button>
            </div>
        )
    }
}

export default Header;