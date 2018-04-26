import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.visible} vertical>
        <button onClick={this.props.onToggle} className="simpleBtn sidebarClose">
          <Icon name="angle double left" size="big" />
        </button>
        <Menu.Item>
          <Menu.Header>News Topics</Menu.Header>
          <Menu.Menu>
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Tone</Menu.Header>
          <Menu.Menu>
            <Menu.Item>All</Menu.Item>
            <Menu.Item>Positive</Menu.Item>
            <Menu.Item>Negative</Menu.Item>
            <Menu.Item>Neutral</Menu.Item>
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
