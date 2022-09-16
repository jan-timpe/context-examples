import React, {useContext} from 'react';
import _ from 'lodash';
import AuthContext from '../auth/context';
import {
  CanCommentPermissionGuard,
  CanReadPermissionGuard,
  CanWritePermissionGuard
} from '../auth/guard';

export const Home = () => {
  const auth = useContext(AuthContext);
  const {
    user,
    logout
  } = auth;

  return (
    <>
      <div>
        <h2>Home</h2>
        <p>Welcome {user.username}</p>
        <button onClick={logout}>Logout</button>
      </div>

      <div>
        <CanReadPermissionGuard>
          <p>Can read</p>
        </CanReadPermissionGuard>

        <CanWritePermissionGuard>
          <p>Can write</p>
        </CanWritePermissionGuard>

        <CanCommentPermissionGuard>
          <p>Can comment</p>
        </CanCommentPermissionGuard>
      </div>
    </>
  );
};