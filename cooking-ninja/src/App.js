import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/home/Home";
import Create from "./Pages/create/Create";
import Search from "./Pages/search/Search";
import Recipe from "./Pages/recipe/Recipe";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
