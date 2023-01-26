import Note from './Note';
import AddNote from './AddNote';

import React, { Component } from 'react'

class NotesList extends Component {
    render() {
        return (
            <div className="notes-list">
                {this.props.notes.map((note) =>
                    <Note key={note.id} id={note.id} text={note.text} date={note.date}
                        handleDeleteNote={this.props.handleDeleteNote}
                        handleUpdateNote={this.props.handleUpdateNote} />
                )}
                <AddNote
                    handleAddNote={this.props.handleAddNote}
                ></AddNote>
            </div>
        )
    }
}

export default NotesList;