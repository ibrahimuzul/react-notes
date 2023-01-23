
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './Components/NotesList';
import Search from './Components/Search';

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
    <div className='container'>
      <Search></Search>
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      ></NoteList>
    </div>
  );
}

export default App;
