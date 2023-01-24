import { MdDeleteForever } from 'react-icons/md';
import React, { Component } from 'react'

class Note extends Component {
  render() {
    return (
        <div className='note'>
        <span>{this.props.text}</span>
        <div className='note-footer'>
            <small>{this.props.date}</small>
            <MdDeleteForever
                className='delete-icon'
                onClick={() => this.props.handleDeleteNote(this.props.id)}
                size='1.3em'
            ></MdDeleteForever>
        </div>
    </div>
    )
  }
}

export default Note;