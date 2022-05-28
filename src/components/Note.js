import React from "react";
import "./styling/note.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const deleteThisNote = () => {
    props.handleOnDelete(props.id);
  };
  return (
    <div className="note_div">
      <h1 className="h1_tag">{props.title}</h1>
      <div className="p_tag">
        <p>{props.content}</p>
        <button className="adjustBtn" onClick={deleteThisNote}>
          <DeleteIcon className="deleteBtn" />
        </button>
      </div>
    </div>
  );
}

export default Note;
