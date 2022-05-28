import "./App.css";
import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const createNewNote = (notedata) => {
    setNotes((preVal) => {
      return [...preVal, notedata];
    });
  };
  const deleteItem = (id) => {
    console.log("id is");
    console.log(id);
    const newArray = [...notes].filter((preVal) => preVal.id !== id);
    setNotes(newArray);
    console.log(notes);
  };
  return (
    <>
      <Header />
      <CreateNote createOnSubmit={createNewNote} />
      <div className="notes_div">
        {notes?.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              handleOnDelete={deleteItem}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
