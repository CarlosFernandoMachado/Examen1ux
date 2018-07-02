import React, { Component } from 'react';
import firebase from 'firebase/app';

class login extends Component {
    constructor(props) {
        super(props);
    }
    //login
    login() {
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        firebase.auth().signInWithEmailAndPassword(email,pass).then((u)=>{
        }).catch((error) => {
            // Handle Errors here.
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
          });

    }
    render() {
        return (
            <div>
                <input  type="text" placeholder="Email" id="email" />
                <input  type="password" placeholder="Contraseña" id="pass" />
                <button  type="button" onclick="login()">
                    Login
                </button>
            </div>
        );
    }
}