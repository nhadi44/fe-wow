import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";


import LandingPage from "./pages/landingpage";
import Homepage from "./pages/homepage"
import Subscribe from "./pages/subscribe"
import HomepageSubscribe from "./pages/homepageSubscribe"
import Profile from "./pages/profile"
import DetailBook from "./pages/detailBook"
import ReadBook from './pages/readBook'
import Transaction from './pages/transaction'
import AddBook from './pages/addBook'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/homepage-subscribe" component={HomepageSubscribe} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/detail-book" component={DetailBook} />
          <Route exact path="/read-book" component={ReadBook} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/add-book" component={AddBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
