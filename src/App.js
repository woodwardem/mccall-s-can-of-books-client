import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/">
              <BestBooks />
            </Route>
            <Route path="/about">
            <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
