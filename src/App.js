import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components//

import HomePage from './Components/Home';
import SignIn from './Components/Search';
import MakeUp from './Components/MakeUp';
import SignUpPage from './Components/SignUpPage';
import Login from './Components/Form';
import SignInPage from './Components/SignInPage';
import AddItem from './Components/AddItem';

function App() {
  return (
    <div className="App" style={{backgroundImage: "url(/img/eyeshadows.jpg)", backgroundSize: '100% 100%', height: '800px', backgroundAttachment: 'fixed', backgroundColor: 'black'}}>
      <p id="title"><Link to="/">Dash Beauty</Link></p>

      <span className="links"><Link to="/">Home</Link></span>
      <span className="links"><Link to="/Search">Search</Link></span>
      <span className="links"><Link to="/Make-Up">Products</Link></span>
      <span className="links"><Link to="AddItem">Add Item</Link></span>

      



      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Search" element={<SignIn />} />
          <Route path="/Make-Up" element={<MakeUp />} />
          <Route path="Sign-In" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUpPage />} />
          <Route path="/Sign-Up/Sign-In" element={<SignInPage />} />
          <Route path="AddItem" element={<AddItem />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
