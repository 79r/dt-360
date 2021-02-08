import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& ::-webkit-scrollbar": {
      display: "none",
    },
  },
  threeSixTyArea: {
    display: "flex",
    flexWrap: "wrap",
    "& > .pnlm-container": {
      height: "100vh !important",
    },
  },
});

const ImageInfo = (props) => {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.imageInfo}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};

export default ImageInfo;
