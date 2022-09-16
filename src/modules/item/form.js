import React, { useState, useContext } from 'react';
import _ from 'lodash';
// import * as api from './api';

export const ItemForm = ({api}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const createItem = (e) => {
    api.addItem({ name, price });
    setName('');
    setPrice('');
    e.preventDefault();
  }

  return (
    <div>
      <h2>New item</h2>
      <form onSubmit={createItem}>
        <input type='text' name='name' placeholder='Flowers' onChange={e => setName(e.target.value)} value={name}/>
        <input type='text' name='price' placeholder='$9.78' onChange={e => setPrice(e.target.value)} value={price}/>
        <input type="submit" />
      </form>
    </div>
  )
};