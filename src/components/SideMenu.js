import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.visible} vertical>
        <button onClick={this.props.onToggle} className="simpleBtn sidebarClose">
          <Icon name="close" size="big" />
        </button>
        <Menu.Item>
          <Menu.Header>Points</Menu.Header>
          <Menu.Menu>
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Regions</Menu.Header>
          <Menu.Menu>
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SideMenu;
