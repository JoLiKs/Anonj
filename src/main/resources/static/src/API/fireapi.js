import firebase from 'firebase'
import {firebaseConfig} from "../Config.js"

export const fireapi = {
  writeMsg(msg) {firebase.database().ref('messages').set({
    message: msg
  });},
  readMsg() {
    return new Promise(function(resolve, reject) {
    firebase.database().ref('messages/message').on('value', snap => {resolve(snap.val())})})
    .then(response => {return response})
}
}
window.fireapi = fireapi