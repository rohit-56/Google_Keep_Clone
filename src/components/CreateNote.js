import React, { useState } from "react";
import "./styling/createNote.css";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
  const [notedata, setNotedata] = useState({
    title: "",
    content: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNotedata((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = () => {
    props.createOnSubmit(notedata);
    setNotedata({
      title: "",
      content: "",
    });
  };

  return (
    <div className="main_div">
      <input
        className="titleArea"
        type="text"
        placeholder="Title"
        name="title"
        value={notedata.title}
        onChange={handleOnChange}
      />
      <div className="both_tag">
        <textarea
          className="notesArea"
          name="content"
          placeholder="Write a note..."
          value={notedata.content}
          onChange={handleOnChange}
        ></textarea>
        <button className="adjustBtn" onClick={handleOnSubmit}>
          <AddIcon className="Btn" />
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
