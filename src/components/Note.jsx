import DeleteIcon from "@mui/icons-material/Delete";
import { PropTypes } from "prop-types";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1 className="prop-title">{props.title}</h1>
      <hr />
      <p>{props.content}</p>
      <div className="delete-button">
        <button type="button" onClick={handleClick}>
          <DeleteIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
};

export default Note;
