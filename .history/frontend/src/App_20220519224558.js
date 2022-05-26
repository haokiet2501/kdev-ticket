import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' exact element={<Home />} />
          <Route path='/' exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
