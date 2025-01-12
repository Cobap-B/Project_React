import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Test from './Part/Test';
import Game from './Part/Game';
import './CSS/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/test">Test</Link></li>
              <li><Link to="/game">Game</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}









export default App;
