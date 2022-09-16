import React, {useState} from 'react';
import _ from 'lodash';
import * as api from './api';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  // or, my preference, use regular state in context
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const u = api.login(username, password);
    await setUser(u);
  };

  const logout = async () => {
    await setUser(null);
  };

  return (
    <AuthContext.Provider value={{login, logout, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;