import AppProvider from "./Providers/AppProvider";
import ThreeSixTyProvider from "./Providers/ThreeSixTyProvider";
import { createUseStyles } from "react-jss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import ThreeSixTy from "./views/ThreeSixTy";

const useStyles = createUseStyles({
  root: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
  },
  myButton: {
    color: "green",
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      // jss-plugin-nested applies this to a child span
      fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/360/:slug" component={ThreeSixTy} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
