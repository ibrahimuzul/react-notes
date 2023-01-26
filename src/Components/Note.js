import { MdDeleteForever } from 'react-icons/md';
import React, { Component } from 'react'

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteText: this.props.text,
            characterLimit: 200
        };
    }

    handleChange = (event) => {
        if (this.state.characterLimit - event.target.value.length >= 0) {
            this.setState({ noteText: event.target.value });
        }
    }

    render() {
        return (
            <div className='note'>
                <textarea
                    rows="8"
                    cols="10"
                    placeholder="Type to add a note"
                    value={this.state.noteText}
                    onChange={this.handleChange}>
                </textarea>
                <div className='note-footer'>
                    <small>{this.props.date}</small>
                    <MdDeleteForever
                        className='delete-icon'
                        onClick={() => this.props.handleDeleteNote(this.props.id)}
                        size='1.3em'
                    ></MdDeleteForever>
                </div>
                <div className='note-footer'>
                    <small>{this.state.characterLimit - this.state.noteText.length} Remaining</small>
                    <button className="save" onClick={() => this.props.handleUpdateNote(this.props.id, this.state.noteText)}>Save</button>
                </div>
            </div>
        )
    }
}

export default Note;