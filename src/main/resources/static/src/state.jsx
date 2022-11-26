import {rerenderEntireTree} from './render.jsx'
import * as axios from 'axios';
import { createStore, combineReducers, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import App from './App';

const initialState = {
    messages: ["s"],
    isLoggedIn: false
}
function loginReducer(state, action) {
    switch(action.type) {
        case "login": {
        state.isLoggedIn = action.value
        return { state };
}
        default: return initialState;
    }
}
const rootReducer = combineReducers({
login: loginReducer,
form: formReducer

       // В state все данные формы будут храниться в свойстве form
});
/*const mapStateToProps = (state) => {
    return {
        isLoggedIn: initialState.isLoggedIn
    }
}*/

export let store = createStore(rootReducer)

let state = store.getState()
export function mapStateToProps(component) {
    switch(component) {
        case App: {
            return function (state) {
                return {
                    isLoggedIn: state.value_1
                };
            }
        }
        default: return state;
    }
}


window.store = store;