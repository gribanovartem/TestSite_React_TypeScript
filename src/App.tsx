import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { TodoPage } from "./pages/TodoPage";
import { BlogPage } from "./pages/BlogPage";
import { InfoPage } from "./pages/InfoPage";
import { MainPage } from "./pages/MainPage";

const App: React.FC = () => {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Switch>
               <Route component={MainPage} path="/" exact />
               <Route component={TodoPage} path="/TodoPage" exact />
               <Route component={BlogPage} path="/BlogPage" exact />
               <Route component={InfoPage} path="/InfoPage" exact />
            </Switch>
         </div>
      </BrowserRouter>
   );
};
export default App;
