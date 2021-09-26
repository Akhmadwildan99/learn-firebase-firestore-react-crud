import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Read from "./components/Read";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/read" component={Read} />
      </Switch>
    </Router>
  );
}

export default App;
