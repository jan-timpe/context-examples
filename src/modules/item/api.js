import React, { useState } from 'react';
import _ from 'lodash';
import { ItemList } from './list';
import { ItemForm } from './form';

// "raw" functions - doesn't work unless you know to fetch periodically
// or have state somewhere
// let items = [
//   {
//     id: 1,
//     name: 'baby formula',
//     price: '$99.99'
//   }
// ];

// export const getItems = () => items;

// export const addItem = (item) => {
//   const swap = items;
//   swap.push({ ...item, id: _.last(items).id + 1});
//   items = swap;
//   console.log(items);
// };

export const withItemsApi = (C) => {
  let items = [
    {
      id: 1,
      name: 'baby formula',
      price: '$99.99'
    }
  ];

  const addItem = (item) => {
    items = [
      ...items,
      {
        id: _.last(items).id + 1,
        ...item
      }
    ]
  };

  return (props) => <C api={{addItem}} items={items} {...props} />;
}

// Composability
// export const ItemsApiComponents = () => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: 'baby formula',
//       price: '$99.99'
//     }
//   ]);

//   const addItem = (item) => setItems([
//     ...items,
//     {
//       id: _.last(items).id + 1,
//       ...item
//     }
//   ]);

//   return (
//     <>
//       <ItemList items={items} />
//       <ItemForm api={{addItem}}/>
//     </>
//   );
// };
