import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/counter/appSlice';
import './SidebarChannels.css';

const SidebarChannels = ({ id, channelName }) => {
  const dispatch = useDispatch();
  // console.log(id);
  return (
    <div
      className='sidebarChannels'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className='sidebarChannels__hash'>#</span> {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannels;
