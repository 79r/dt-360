import React from "react";
import { createUseStyles } from "react-jss";
import { useThreeSixTy } from "../../Providers/ThreeSixTyProvider";

import Title from "./shared/Title";
import Image from "./shared/Image";

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
});

const Homepage = () => {
  const classes = useStyles();
  const data = useThreeSixTy();

  return (
    <section className={classes.root}>
      <Title />
      <div className={classes.container}>
        <div className={classes.imageList}>
          {data.map((image, index) => (
            <Image key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
