import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note'


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      notes: [
        {id: 1, noteContent: "Note 1"},
        {id: 2, noteContent: "Note 2"},
      ],
    }
  }
  render() {
    return (
      <div className="notesWrapper">
        <h1>Red Social</h1>
        <Note noteContent ={} noteId={} key={}/>
      </div>
    );
  }
}

export default App;
