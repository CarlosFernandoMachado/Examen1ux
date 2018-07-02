import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <input className="noteInput" placeholder="Di lo que piensas!" />
                <button className="noteButton">Publicar</button>
            </div>
        )
    }
}

export default NoteForm;