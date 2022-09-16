import React, { useContext, useState } from 'react';
import _ from 'lodash';
import * as api from './api';

export const ItemList = ({items}) => {
  return (
    <div>
      <h2>Item list</h2>
      {_.map(items, i => (
        <div key={i.id}>
          <p>{i.id}</p>
          <p>{i.name}</p>
          <p>{i.price}</p> 
        </div>
      ))}
      {/* <button onClick={refreshItems}>Refresh</button> */}
    </div>
  )
};
