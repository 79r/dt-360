import React from "react";
import { createUseStyles } from "react-jss";
import { Pannellum } from "pannellum-react";
import { useThreeSixTy } from "../../Providers/ThreeSixTyProvider";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import arrowImage from "../../assets/arrow.png";

// import ImageInfo from "./shared/ImageInfo";
import BackToHomepage from "./shared/BackToHomepage";

const useStyles = createUseStyles({
  root: {
    "& ::-webkit-scrollbar": {
      display: "none",
    },
    "& .custom-hotspot": {
      "& .hotspot": {
        // transform: "translate3d(42px, -62px, -135px)",
        "& .in": {
          backgroundImage: `url('${arrowImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        },
      },
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
          title={threeSixTyImage.title}
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
              cssClass="custom-hotspot"
              createTooltipFunc="hotspot"
              createTooltipArgs="Baltimore Museum of Art"
              handleClick={(evt, args) => history.push(path)}
            />
          ))}
        </Pannellum>
      </div>
    </section>
  );
};

export default Homepage;
