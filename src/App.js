import { Link } from 'react-router'
import './App.css';

import { BrowserRouter as Router } from "react-router";
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Router>
      <nav className='practice-nav'>
        <ul className='practice-ul'>
          <li className='practice-li'> <Link to="/">Home</Link>  </li>
          <li className='practice-li'> <Link to="/searchfilter">Search Filter</Link>  </li>
          <li className='practice-li'> <Link to="/featchapi">Featch API</Link>  </li>
          <li className='practice-li'> <Link to="/debounce">Debounce</Link>  </li>
          <li className='practice-li'> <Link to="/form">Form</Link> </li>
          <li className='practice-li'> <Link to="/prop">Prop Passing</Link> </li>
          <li className='practice-li'> <Link to="/todo">ToDo App</Link> </li>
          <li className='practice-li'><Link to="/imageslider">Image Slider</Link></li>
          <li className='practice-li'><Link to="/starrating">Star Rating</Link></li>
          <li className='practice-li'><Link to="/tictactoe">Tic Tac Toe</Link></li>
        </ul>
      </nav>

      <AllRoutes />
    </Router>
  );
}

export default App;
