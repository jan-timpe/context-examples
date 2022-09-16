import React from 'react';
import _ from 'lodash';

const ItemApiContext = React.createContext();

const ItemApiProvider = ({children}) => {

  return (
    <ItemApiContext.Provider>
      {children}
    </ItemApiContext.Provider>
  );
};

export const ItemApiConsumer = ItemApiContext.Consumer;
export default ItemApiContext;