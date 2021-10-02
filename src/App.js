import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Read from "./components/Read";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/read" component={Read} />
        <Route exact path="/register" component={FormRegister} />
        <Route exact path="/login" component={FormLogin} />
      </Switch>
    </Router>
  );
}

export default App;
