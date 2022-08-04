import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Region from './components/Region';

function App() {
  return (
    <div className="App">
      <h1 className = "title">Hikr App! Where all your hiking dreams come true!</h1>
    <nav className = "nav">
      <Link className="nav2" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="nav2" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="nav2" to="/region">
          <h1>Countries</h1>
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region" element={<Region />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
