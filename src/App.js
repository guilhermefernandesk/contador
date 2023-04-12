import './App.css';

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";

import { useState } from 'react';

function App() {
  //contador começa em 0
  const [count, setCount] = useState(0);
  //funcao chamada para incrementar o botao
  function incrementar(){
    setCount(count + 1);
  }
  //funcao chamada para decrementar o botao
  function decrementar(){
    if(count > 0 )
    setCount(count - 1);
  }
  return (
    <div className='App'> {/*classe CSS de estilo "App"*/}
     <div>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
     <h1 className='Contador'>Contador</h1>
      {count}
      <div>
      <button className = 'decrementar' onClick={decrementar}>-</button> 
      <button className = 'incrementar' onClick={incrementar}>+</button> 
     </div>
     

    </div>
  );
}

export default App;
