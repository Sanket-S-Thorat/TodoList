import ModeTwoToneIcon from "@mui/icons-material/ModeTwoTone";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <ModeTwoToneIcon fontSize="large" style={{color: "#6674cc"}}/>
        <h1 className="title">
          ToDo<span>List</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
