import _ from 'lodash';

export const isActive = (user) => user.isActive === true;
export const canRead = (user) => isActive(user) && _.includes(user.permissions, 'read');
export const canWrite = (user) => isActive(user) && _.includes(user.permissions, 'write');
export const canComment = (user) => isActive(user) && _.includes(user.permissions, 'comment');
