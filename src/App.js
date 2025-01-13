import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Test from './Part/Test';
import Game from './Part/Game';
import Memory from './Part/MemoryGame';
import './CSS/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/test">Test</Link></li>
              <li><Link to="/cardGame">CardGame</Link></li>
              <li><Link to="/memoryGame">Memory</Link></li>
            </ul>
          </nav>

          <Routes>
          <Route path="/" element={<Game />} />
            <Route path="/test" element={<Test />} />
            <Route path="/cardGame" element={<Game />} />
            <Route path="/memoryGame" element={<Memory />} />
            <Route path="*" element={<h1>404 not found !</h1>} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}




export default App;
