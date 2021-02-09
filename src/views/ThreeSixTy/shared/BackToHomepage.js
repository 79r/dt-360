import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
    color: "#fff",
    backgroundColor: "#1568ff",
    padding: 10,
    borderRadius: 30,
    height: 36,
    width: 36,
    textAlign: "center",
    lineHeight: "42px",
    "&:hover": {
      backgroundColor: "#ec8300",
    },
    "& svg": {
      width: 20,
      height: "auto",
      fill: "currentColor",
    },
  },
});

const BackToHomepage = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.button}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 365.001 365.001"
      >
        <g>
          <g>
            <path d="M360.74,155.711l-170-149c-4.717-4.133-11.764-4.133-16.48,0l-170,149c-5.191,4.55-5.711,12.448-1.161,17.641 c4.55,5.19,12.449,5.711,17.64,1.16l13.163-11.536V348.89c0,6.903,5.596,12.5,12.5,12.5h94.733h82.73h94.732 c6.904,0,12.5-5.597,12.5-12.5V162.977l13.163,11.537c2.373,2.078,5.311,3.1,8.234,3.1c3.476,0,6.934-1.441,9.405-4.261 C366.452,168.159,365.932,160.262,360.74,155.711z M153.635,336.39V233.418h57.729v102.973L153.635,336.39L153.635,336.39z M306.099,141.161V336.39h-69.732V220.918c0-6.903-5.598-12.5-12.5-12.5h-82.73c-6.903,0-12.5,5.597-12.5,12.5v115.473H58.903 V141.161c0-0.032-0.004-0.062-0.004-0.093L182.5,32.733l123.603,108.334C306.104,141.1,306.099,141.129,306.099,141.161z" />
            <path
              d="M154.5,120.738c0,6.904,5.596,12.5,12.5,12.5h31c6.903,0,12.5-5.596,12.5-12.5s-5.597-12.5-12.5-12.5h-31
			C160.097,108.238,154.5,113.834,154.5,120.738z"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
};

export default BackToHomepage;
