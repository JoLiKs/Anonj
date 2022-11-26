import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render.jsx'
import {store} from './state.jsx'

rerenderEntireTree(store.getState());
let tempLog = false;
store.subscribe(() => {
if(store.getState().login.isLoggedIn != tempLog) {
tempLog = store.getState().login.isLoggedIn
rerenderEntireTree()
console.log("Rerendered!")

}})

/*store.subscribe(() => {


})*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
