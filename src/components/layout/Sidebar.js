import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import {
  Add,
  Call,
  ExitToApp,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import SidebarChannels from '../SidebarChannels';
import './Sidebar.css';
import db, { auth } from '../../firebase';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => {
      // console.log(snapshot.docs[0].id);
      // console.log(snapshot.docs[0].data());
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        channelName,
      });
    }
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <Avatar src={user.photo} />
        <div className='sidebar__profileInfo'>
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </div>
        <ExpandMore />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMore />
            <h4>channels</h4>
          </div>
          <Add onClick={handleAddChannel} className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelsList'>
          {channels.map(({ id, channel }) => (
            <SidebarChannels
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
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
        <div className='sidebar__profileIcons'>
          <div
            onClick={() => {
              auth.signOut();
            }}
            className='logout'
          >
            <ExitToApp />
            LOGOUT
          </div>
          <div className='otherIcons'>
            <Mic />
            <Headset />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
