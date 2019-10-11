import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducers from './reducers';
import UserList from './component/UserList';

const  App =() =>{
  return (
    <Provider store={createStore(reducers)}>
      <div className="App">
      HI redux
      <UserList />
    </div>
    </Provider>
  );
}

export default App;
