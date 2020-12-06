import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import React from 'react';
import './Login.css';

const login = () => {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((err) => console.log(err));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPF1ALXvPcEbdj0JNwy9r9nQg1ZQKjG-ayhl7ziH65Cd1Pqlbb2r2DrlrcER8ujpJEQ4XNuMuM4gk7fWMbzZ9Ci0hINNeOvsnUjQ&usqp=CAU&ec=45732303'
          alt='logo'
        />
      </div>
      <Button onClick={signIn}> Sign In</Button>
    </div>
  );
};

export default login;
