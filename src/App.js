
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "15/04/2022"
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "11/04/2022"
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "14/04/2022"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    console.log("b");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);


  useEffect(() => {
    console.log("a");
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    //console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchNote={setSearchText}></Search>
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
