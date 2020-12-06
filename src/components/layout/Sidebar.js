import { Avatar } from '@material-ui/core';
import {
  Add,
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from '@material-ui/icons';
import React from 'react';
import SidebarChannels from '../SidebarChannels';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ExpandMore />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMore />
            <h4>channels</h4>
          </div>
          <Add className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelsList'>
          <SidebarChannels />
        </div>
      </div>
      <div className='sidebar__voice'>
        <SignalCellularAlt className='sidebar__voiceIcon' fontSize='large' />
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcon'>
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className='sidebar__profile'>
        <Avatar />
        <div className='sidebar__profileInfo'>
          <h3>franood</h3>
          <p>id</p>
        </div>

        <div className='sidebar__profileIcons'>
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
