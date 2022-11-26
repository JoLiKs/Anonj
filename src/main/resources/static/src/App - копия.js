import React from 'react';
import logo from './logo.svg';
import cls from './App.module.css';
import firebase from 'firebase'
import {fireapi} from './API/fireapi'
import Message from './components/message'
import * as axios from 'axios';
import {rerenderEntireTree} from './render.js'
import {addMsg} from './state.js'
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
  super(props)
this.inpRef = React.createRef()
this.sendMsg= () => {

addMsg(App, this.inpRef.current.value, "out")

}
let messages = ""

  this.app = firebase

this.database = this.app.database().ref('sval')
  this.state = {
    sval: "",
    msgin: "",
    msgout: "",
    temp_msgin: "Ho"
  }
  }
writeUserData(name) {
  firebase.database().ref('users/' + name).set({
    username: name
  });
}
componentDidUpdate() {

}
componentDidMount() {

return (
    <div className={`${cls.App}`}>
      <header className={`${cls.Header}`}>
      <div className={`${cls.chat}`}>
      {this.props.state.msg}
      {this.messagesin}
      {this.messagesout}
      <Message msg={this.props.state.msg}/>
      </div>
        <div className={`${cls.forms}`}>
        <input ref={this.inpRef}/>
        <input type="button" value="Отправить" className={`${cls.sendmsg}`} id="btn" onClick={() => this.sendMsg()}/>

        </div>
      </header>
    </div>
  );
this.database.on('value', snap => {
      this.setState({
        sval: snap.val()

      })
    })
  }

  render() {
  return this.componentDidMount()
}}

//export default App;
/*var stompClient = null;
function setConnected(connected) {

    if (connected) {
        $("#conversation").show();
        $("#connect").hide();
        $("#disconnect").show();
    }
    else {
        $("#conversation").hide();
        $("#disconnect").hide();
        $("#connect").show();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);

        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});*/