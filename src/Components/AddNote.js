import React, { Component } from 'react'

class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            characterLimit: 200
        };
    }

    handleChange = (event) => {
        if (this.state.characterLimit - event.target.value.length >= 0) {
            this.setState({ noteText: event.target.value });
        }
    }

    handleSaveClick = () => {
        if (this.state.noteText.trim().length > 0) {
            this.props.handleAddNote(this.state.noteText);
            this.setState({ noteText: '' });
        }
    }

    render() {
        return (
            <div className="note new">
                <textarea
                    rows="8"
                    cols="10"
                    placeholder="Type to add a note"
                    value={this.state.noteText}
                    onChange={this.handleChange}>

                </textarea>
                <div className="note-footer">
                    <small>{this.state.characterLimit - this.state.noteText.length} Remaining</small>
                    <button className="save" onClick={this.handleSaveClick}>Save</button>
                </div>
            </div>
        )
    }
}

export default AddNote;