import React from "react";
import { createUseStyles } from "react-jss";
import { Pannellum } from "pannellum-react";
import { useThreeSixTy } from "../../Providers/ThreeSixTyProvider";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ImageInfo from "./shared/ImageInfo";
import BackToHomepage from "./shared/BackToHomepage";

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

const Homepage = () => {
  const classes = useStyles();
  const params = useParams();
  const data = useThreeSixTy();
  const threeSixTyImage = data.find((item) => item.slug === params.slug);

  console.log(data);

  let history = useHistory();

  if (!params) {
    return null;
  }

  return (
    <section className={classes.root}>
      <BackToHomepage />
      <div className={classes.threeSixTyArea}>
        <Pannellum
          width="100%"
          mouseZoom={true}
          // title={threeSixTyImage.title}
          image={threeSixTyImage.image}
          pitch={threeSixTyImage.pitch}
          yaw={threeSixTyImage.yaw}
          hfov={threeSixTyImage.hfov}
          autoRotate={threeSixTyImage.autoRotate && threeSixTyImage.autoRotate}
          autoLoad
          onLoad={() => {
            console.log(threeSixTyImage.title + " has been loaded!");
          }}
        >
          {threeSixTyImage.hotspots.map(({ pitch, yaw, text, path }) => (
            <Pannellum.Hotspot
              key={Number(pitch)}
              type="custom"
              pitch={Number(pitch)}
              yaw={Number(yaw)}
              text={text}
              handleClick={(evt, args) => history.push(path)}
            />
          ))}
        </Pannellum>
      </div>
    </section>
  );
};

export default Homepage;
