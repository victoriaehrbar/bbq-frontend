import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BbqForm from "./components/BbqForm";
import BbqIndex from "./components/BbqIndex";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/bbqs" component={BbqIndex} />
          <Route path="/bbqs/new" component={BbqForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
