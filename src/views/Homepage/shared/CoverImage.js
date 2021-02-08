import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  thumbnail: {
    overflow: "hidden",
    height: 300,
    borderRadius: 3,
    "&:hover": {
      "& > img": {
        transform: "scale(1.1)",
        height: "auto",
      },
    },
    "& > img": {
      width: "100%",
      height: "auto",
      transition: "all .3s",
    },
  },
});

const CoverImage = (props) => {
  const { image, title, path } = props;
  const classes = useStyles();
  return (
    <Link to={"/360/" + path}>
      <div className={classes.thumbnail}>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};

export default CoverImage;
