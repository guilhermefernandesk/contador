import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Contador from "./components/Contador";


function App() {
  return (
     <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Contador} />
          <Route path="/home/:count?" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
