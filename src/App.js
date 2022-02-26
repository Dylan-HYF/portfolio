import './App.css';

import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'
import Home from './Home/Home'
// import About from './About/About'
import Projects from './Projects/Projects'
// import Contact from './Contact/Contact'
import Header from './Header/Header'

function App() {
  return (
    <Router>
      <HashRouter basename="/">
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact><Home /></Route>
          </Switch>
          {/* <Switch>
          <Route path="/about"><About /></Route>
        </Switch> */}
          <Switch>
            <Route path="/projects"><Projects /></Route>
          </Switch>
          {/* <Switch>
          <Route path="/contact"><Contact /></Route>
        </Switch> */}
        </div>
      </HashRouter>
    </Router>
  );
}

export default App;
