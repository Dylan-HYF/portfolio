import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
// import About from './About/About'
import Projects from './Projects/Projects'
// import Contact from './Contact/Contact'
import Header from './Header/Header'

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
