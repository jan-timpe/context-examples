import React, { useState, useContext } from 'react';
import _ from 'lodash';
import { canComment, canRead, canWrite, isActive } from './filters';
import AuthContext from './context';
// import * as api from './api';

export const AuthForm = (/* {user, setUser} */) => {
  // const [user, setUser] = useState(null);
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    await e.preventDefault();

    // or dispatch an action and handle this in a thunk or some shit somewhere
    // so the user obj ends up in global state
    // const u = api.login(username, password);

    // using context
    const u = await auth.login(username, password);

    console.log(u);

    // await setUser(u);
    await setUsername('');
    await setPassword('');
  }

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <input type='text' name='username' placeholder='jesse' onChange={e => setUsername(e.target.value)} value={username}/>
        <input type='password' name='password' placeholder='test' onChange={e => setPassword(e.target.value)} value={password}/>
        <input type="submit" />
      </form>
    </div>
  )
};