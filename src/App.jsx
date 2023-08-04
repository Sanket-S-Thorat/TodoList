import { useState } from "react";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNotes = (newNote) => {
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => index !== id);
    });
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={addNotes} />
      <div className="note-container">
        {notes.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
