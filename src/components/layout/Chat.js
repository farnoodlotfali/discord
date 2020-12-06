import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from '../ChatHeader';
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from '@material-ui/icons';
import Message from '../Message';
import { useSelector } from 'react-redux';
import {
  selectChannelId,
  selectChannelName,
} from '../../features/counter/appSlice';
import db from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/counter/userSlice';

const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  // console.log(channelId);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput('');
  };
  // console.log(input);
  // console.log(messages[0].timestamp.seconds);
  return (
    <div className='chat '>
      <ChatHeader channelName={channelName} />

      <div className='chat__messages'>
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className='chat__input'>
        <AddCircle fontSize='large' />
        <form action=''>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type='text'
            placeholder={channelName ? `Message ${channelName}` : `Message`}
          />
          <button
            onClick={sendMessage}
            className='chat__inputButton'
            type='submit'
          >
            Send Message
          </button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcard fontSize='large' />
          <Gif fontSize='large' />
          <EmojiEmotions fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Chat;
