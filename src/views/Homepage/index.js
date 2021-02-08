import React from "react";
import { createUseStyles } from "react-jss";
import { useThreeSixTy } from "../../Providers/ThreeSixTyProvider";

import Title from "./shared/Title";
import StartButton from "./shared/StartButton";
import CoverImage from "./shared/CoverImage";

const useStyles = createUseStyles({
  root: {
    padding: "30px 0 100px 0",
  },
  container: {
    paddingTop: 0,
    width: "1200px",
    margin: "0 auto",
  },
  imageList: {
    display: "flex",
    flexWrap: "wrap",
  },
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

const Homepage = () => {
  const classes = useStyles();
  const data = useThreeSixTy();

  return (
    <section className={classes.root}>
      <Title />
      <div className={classes.container}>
        <div className={classes.imageList}>
          {data.map(({ title, slug, thumbnail }) => (
            <div className={classes.item} key={slug}>
              <div className={classes.itemBox}>
                <CoverImage image={thumbnail} title={title} path={slug} />
                <StartButton path={slug} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
