import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Router>
  );
}

export default App;
