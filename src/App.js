import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Contador from "./pages/Contador";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";


function App() {
  return (
     <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Contador} />
          <Route path="/home/:count?/:name?/" component={Home} />
          <Route path="/noticias" component={Noticias} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
