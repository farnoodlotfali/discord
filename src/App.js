import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/layout/Chat';
import Sidebar from './components/layout/Sidebar';
import Login from './components/pages/Login';
import { login, logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className='app'>
      {user ? (
        <Fragment>
          <Sidebar />
          <Chat />
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
