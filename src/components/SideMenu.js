import React, { Component } from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

class SideMenu extends Component {
  render() {
    return (
      <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.visible} vertical>
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
