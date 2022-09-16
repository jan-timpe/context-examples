import React from 'react';
import _ from 'lodash';

const mockLoginEndpoint = ({ username, password}) => {
  if (username === 'admin' && password === 'test') {
    return {
      isActive: true,
      permissions: ['read', 'write', 'comment'],
    };
  } else if (username === 'user1' && password === 'testme61') {
    return {
      isActive: true,
      permissions: ['read', 'comment'],
    };
  } else if (username === 'evilm@n' && password === 'yeeboi') {
    return {
      isActive: false,
      permissions: ['read', 'write', 'comment'],
    };
  }

  return null;
};

export const login = (username, password) => mockLoginEndpoint({ username, password });