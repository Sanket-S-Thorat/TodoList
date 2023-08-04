import ReplayIcon from "@mui/icons-material/Replay";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { PropTypes } from "prop-types";

const AddNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const addNote = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const resetNote = (event) => {
    console.log(event.target);
  };

  const submitNote = (event) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <section className="take-note">
        <form className="note-form">
          <input
            type="text"
            className="text-input"
            name="title"
            rows={1}
            placeholder="Title"
            onChange={addNote}
            value={note.title}
          />
          <textarea
            type="text"
            className="text-input"
            name="content"
            placeholder="take a note..."
            onChange={addNote}
            rows={1}
            value={note.content}
          />
          <button type="reset" className="reset-button" onClick={resetNote}>
            <ReplayIcon fontSize="large" />
          </button>
          <button type="submit" className="add-button" onClick={submitNote}>
            <AddIcon fontSize="large" />
          </button>
        </form>
      </section>
    </div>
  );
};

AddNote.propTypes = {
  onAdd: PropTypes.any.isRequired,
};

export default AddNote;
