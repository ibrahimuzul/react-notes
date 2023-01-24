import { nanoid } from 'nanoid';
import NoteList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchText: '',
      darkMode: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('react-notes-app-data') == null) {
      console.log("initial empty data for local storage");
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify([])
      );
    }

    this.setState({ notes: JSON.parse(localStorage.getItem('react-notes-app-data')) });

  }

  handleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  }

  handleSearchText = (text) => {
    this.setState({ searchText: text });
  }

  addNote = (text) => {
    //console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...this.state.notes, newNote];
    this.setState({ notes: newNotes });
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(newNotes)
    );
  }

  deleteNote = (id) => {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(newNotes)
    );
  }

  render() {
    return (
      <div className={`${this.state.darkMode && 'dark-mode'}`}>
        <div className='container'>
          <Header handleToggleDarkMode={this.handleDarkMode}></Header>
          <Search handleSearchNote={this.handleSearchText}></Search>
          <NoteList
            notes={this.state.notes.filter((note) => note.text.toLowerCase().includes(this.state.searchText.toLowerCase()))}
            handleAddNote={this.addNote}
            handleDeleteNote={this.deleteNote}
          ></NoteList>
        </div>
      </div>
    )
  }
}

export default App;