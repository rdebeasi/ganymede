import React, { Component } from 'react';
import { Sidebar, Button, Icon } from 'semantic-ui-react';

import './App.css';
import Map from './Map';
import SideMenu from './SideMenu';

class App extends Component {
  state = { sidebarVisible: false };

  toggleSidebar = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  render() {
    return (
        <Sidebar.Pushable>
          <SideMenu visible={this.state.sidebarVisible} />
          <Button onClick={this.toggleSidebar}>
            <Icon name="sidebar" size="big" />
          </Button>
            <Sidebar.Pusher className="contentArea">
              <Map />
            </Sidebar.Pusher>
        </Sidebar.Pushable>


    );
  }
}

export default App;
