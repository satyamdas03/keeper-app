import React, { useState } from "react";
import Create from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <Create
        onCreate={newNote => {
          setNotes(oldNotes => {
            return [...oldNotes, newNote];
          });
        }}
      />
      {notes.map(note => (
        <Note
          onDelete={id => {
            const newNotes = notes.filter(note => note.id !== id);
            setNotes(() => newNotes);
          }}
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
