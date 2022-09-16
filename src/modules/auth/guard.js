import React, {useContext} from 'react';
import _ from 'lodash';
import AuthContext from './context';
import { isActive, canRead, canWrite, canComment } from './filters';
import { AuthForm } from './form';

export const Guard = ({
  children,
  userValidationFunc = isActive,
  DeniedComponent = (<AuthForm />)
}) => {
  const auth = useContext(AuthContext);
  const isAllowed = !_.isEmpty(auth.user) && userValidationFunc(auth.user);

  return (
    <>
      {
        isAllowed
          ? (children)
          : (DeniedComponent)
      }
    </>
  );
};

export const CanReadPermissionGuard = ({
  children,
  DeniedComponent = (<p>Can't read</p>)
}) => (
  <Guard userValidationFunc={canRead} DeniedComponent={DeniedComponent}>
    {children}
  </Guard>
);

// export const CanWritePermissionGuard = ({children}) => (
//   <Guard userValidationFunc={canWrite}>
//     {children}
//   </Guard>
// );
export const CanWritePermissionGuard = ({
  children,
  DeniedComponent = (<p>Can't write</p>)
}) =>
  Guard({ children, DeniedComponent, userValidationFunc: canWrite })

export const CanCommentPermissionGuard = ({
  children,
  DeniedComponent = (<p>Can't comment</p>)
}) => (
  <Guard userValidationFunc={canComment}  DeniedComponent={DeniedComponent}>
    {children}
  </Guard>
);
