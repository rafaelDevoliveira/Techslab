import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import "./index.css";
import Tbvetor from "./components/Tb_vetor";
import Age from "./components/Age";
import FizBuzz from "./components/FizBuzz";
import Calculadora from "./components/Calculadora";

function App() {
  return (
    <div className="App">
      <h2>TECHSLAB</h2>
      <ul>
        <li>
          <a href="/">Tbvetor</a>
        </li>
        <li>
          <a href="/calculadora">Calculadora</a>
        </li>
        <li>
          <a href="/age">Age</a>
        </li>
        <li>
          <a href="/fiz">FizBuzz</a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Tbvetor} />
          <Route path="/calculadora" component={Calculadora} />
          <Route path="/age" component={Age} />
          <Route path="/fiz" component={FizBuzz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
