import { AllData, Dashboard, Manage } from "./containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllData} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/manage" component={Manage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
