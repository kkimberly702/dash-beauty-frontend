import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import HomePage from './Components/Home';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Link to="/">Home</Link>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
