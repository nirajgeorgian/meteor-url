import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Header extends Component {
    state = {
        activeItem: 'home'
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <nav>
                <Menu secondary>
                    <Menu.Item name='Oo.OO' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}/>
                </Menu>
            </nav>
        )
    }
}

export default Header
