import React from 'react';
import logo from '../logo.svg';
import cls from '../App.module.css';
import MessageList from './MessageList';
import * as axios from 'axios';
import ReactDOM from 'react-dom';
import Form from './form';
import SubBtn from './subBtn';
import {newMessage} from '../render.jsx';
import Chat from './Chat'
import Aftlog from './aftlog'

class CondRend extends React.Component {
constructor (props) {
  super(props)

}

componentDidUpdate() {

}
componentDidMount() {

}

  render() {
//window.store.getState().login.isLoggedIn || window.store.getState().login.isLoggedIn == undefined
if (false) {
return (
<div className={cls.main}>
<Aftlog store={this.props.store} />
</div>
)
}
    return (
 <div className={cls.main}>
<noscript><h2 style="color: #ff0000">Seems your browser doesn't support Javascript! Websocket relies on Javascript being
    enabled. Please enable
    Javascript and reload page!</h2></noscript>
 <div className={cls.formContainer}>

<Form onSubmit={this.props.onSubmit}/>
<SubBtn onSubmit={this.props.onBack} id="back" val="Назад" config="btn"/>

</div>
</div>
    );
  }
}

export default CondRend;

