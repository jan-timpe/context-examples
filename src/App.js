import './App.css';
import React, {useState} from 'react';
import { ItemsApiComponents, withItemsApi } from './modules/item/api';
import {ItemList} from './modules/item/list';
import {ItemForm} from './modules/item/form';
import {AuthForm} from './modules/auth/form';
import _ from 'lodash';
import {isActive, canRead, canWrite, canComment} from './modules/auth/filters';
import {AuthProvider} from './modules/auth/context';
import {Home} from './modules/home/page';
import {Guard} from './modules/auth/guard';

// const WrappedItemsComponents = withItemsApi(({itemsApi, items}) => (
//   <>
//     <ItemList itemsApi={itemsApi} items={items} />
//     <ItemForm itemsApi={itemsApi} items={items} />
//   </>
// ))

// function App() {
//   const [user, setUser] = useState(null); // we could bubble state up

//   return (
//     <div className="App">
//       <h1>App</h1>
//       {!_.isEmpty(user) ? (
//         <>
//           {canRead(user) ? (<><p>Read</p></>) : (<><p>No read</p></>)}
//           {canWrite(user) ? (<><p>Write</p></>) : (<><p>No write</p></>)}
//           {canComment(user) ? (<><p>Comment</p></>) : (<><p>No comment</p></>)}
//         </>
//       ) : (
//         <AuthForm user={user} setUser={setUser} />
//       )}
//     </div>
//   );
// }

const App = () => (
  <div className='App'>
    <h1>App</h1>
    <AuthProvider>
      <Guard>
        <Home />
      </Guard>
    </AuthProvider>
  </div>
);

export default App;
