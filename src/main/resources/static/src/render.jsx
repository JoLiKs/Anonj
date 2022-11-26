import React from 'react';
import ReactDOM from 'react-dom';
import * as axios from 'axios';
import {App_W, update_App_W} from './App';
import {store} from './state.jsx';
import {myContext} from './myContext';
import Root from './Root'
import App from './App'

var state_old = {
messages: []
}

export let rerenderEntireTree = () => {
update_App_W()
ReactDOM.render(

   <React.StrictMode>
    <Root store={store}>
        <App_W store={store}/>
      </Root>
    </React.StrictMode>,
  document.getElementById('root')
);
}

export let newMessage = (data) => {
store.dispatch({type: 'msg', text: data})
}