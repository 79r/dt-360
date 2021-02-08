import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  root: {
    position: "absolute",
    bottom: 42,
    width: "100%",
    textAlign: "center",
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#0089ff",
    padding: "10px 20px",
    borderRadius: 3,
    fontSize: ".9rem",
    "&:hover": {
      backgroundColor: "#002bff",
    },
  },
});

const StartButton = (props) => {
  const { path } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link className={classes.button} to={"/360/" + path}>
        <span>GO TO PANOTOUR 360</span>
      </Link>
    </div>
  );
};

export default StartButton;
