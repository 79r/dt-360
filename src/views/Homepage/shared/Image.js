import React from "react";
import { createUseStyles } from "react-jss";
import StartButton from "./StartButton";
import CoverImage from "./CoverImage";

const useStyles = createUseStyles({
  item: {
    width: "50%",
  },
  itemBox: {
    padding: 10,
    position: "relative",
    lineHeight: 0,
  },
  thumbnail: {
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: "auto",
    },
  },
});

const Image = (props) => {
  const classes = useStyles();
  const { slug, thumbnail, title } = props;
  return (
    <div className={classes.item} key={slug}>
      <div className={classes.itemBox}>
        <CoverImage image={thumbnail} title={title} path={slug} />
        <StartButton path={slug} />
      </div>
    </div>
  );
};

export default Image;
