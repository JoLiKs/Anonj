import React from 'react';
import logo from './logo.svg';
import cls from './App.module.css';
import MessageList from './components/MessageList';
import * as axios from 'axios';
import {rerenderEntireTree} from './render.jsx';
import ReactDOM from 'react-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import $ from 'jquery';
import Form from './components/form';
import SubBtn from './components/subBtn';
import {newMessage} from './render.jsx';
import Chat from './components/Chat'
import Aftlog from './components/aftlog'
import CondRend from './components/CondRend'
import {Logged} from './state.jsx'
import { connect } from 'react-redux'
import {mapStateToProps} from './state.jsx'

class App extends React.Component {
constructor (props) {
  super(props)

this.state = {
url: 'http://192.168.1.60:8080/'
}

}
componentDidUpdate() {

};

componentDidMount() {
var url = this.state.url
$("#disconnect").hide();
$("#connect").hide();
$("#back").hide();
window.currentUser = ""
var stompClient = null;
var countRenders = 0
function setConnected(connected) {

    if (connected) {
        $("#conversation").show();
        $("#connect").hide();
        $("#disconnect").show();
        $("#back").hide();
        document.getElementById("forms").setAttribute("style", "visibility: visible")
        document.getElementById("msgs").setAttribute("style", "visibility: visible")
    }
    else {
        $("#conversation").hide();
        $("#disconnect").hide();
        $("#connect").show();
        $("#back").show();
        document.getElementById("forms").setAttribute("style", "visibility: hidden")
        document.getElementById("msgs").setAttribute("style", "visibility: hidden")
    }
    $("#greetings").html("");
}

function connect() {
axios.post(url, {name: window.currentUser})

        .then(response => {
        console.log(response.data)
        if (response.data == "err_isOnline") {
        alert("Пользователь с именем " + window.currentUser + " уже онлайн! \nДля смены имени нажмите \"Назад\"")
        return }
    var socket = new SockJS(url+'gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (data) {
             getMessage(JSON.parse(data.body).content);
});
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
         axios.post(url, {connect: "disconnect"}, {})
                        .then(response => {
                        console.log(response.data)

                        })

            }

    setConnected(false)
    console.log("Disconnected")
}
let sendMessage = (true) ? (currentUser) => stompClient.send("/app/hello", {}, JSON.stringify({'userName': currentUser, 'name': $("#msg").val()})) : "noFunc";

function getMessage(data) {

 $("#greetings").append();
 newMessage(data)

}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    if (sendMessage != "noFunc") $( "#send" ).click(function() { sendMessage(window.currentUser); });
});


}

  render() {
var onSubmit = (formData) => {
window.currentUser = formData.title
        $("#connect").show();
        $( "#loginForm" ).hide();
        $("#back").show();
this.props.dispatch({ type: "login", value: true});
}
var onBack = () => {
window.currentUser = ""
        $("#connect").hide();
        $( "#loginForm" ).show();
        $("#back").hide();
this.props.dispatch({ type: "login", value: false});
}
return <CondRend store={this.props.store} onSubmit={onSubmit} onBack={onBack}/>;
  }
}
export let update_App_W = () => {
App_W = connect(mapStateToProps)(App);
}
export let App_W = connect(mapStateToProps, null)(App);

export default App;


