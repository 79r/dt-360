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
});

function App() {
  const classes = useStyles();
  return (
    <AppProvider>
      <ThreeSixTyProvider>
        <div className={classes.root}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/360/:slug" component={ThreeSixTy} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThreeSixTyProvider>
    </AppProvider>
  );
}

export default App;
