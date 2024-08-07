import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; 
import { Color } from './Color';
import DataFetcher from './DataFetcher';
import Counter from './Counter';
import { UserProvider } from './UserProvider';
import UserProfile from './UserProfile';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      {/* <Cont /> */}
      {/* <Pro name={"ahgfcfdxhgfxjh"} /> */}
      {/* <Cls /> */}
      {/* <List items={items} /> */}
      {/* <Color /> */}
      {/* <DataFetcher /> */}
      {/* <Counter /> */}
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </>
  );
}

export default App;
