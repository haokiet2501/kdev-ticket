import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import NewTicket from './pages/NewTicket'
import Tickets from './pages/Tickets'
import NotFround from './components/NotFround'


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-ticket' element={<PrivateRoute />}>
            <Route path='/new-ticket' element={<NewTicket />} />
          </Route>
          <Route path='/tickets' element={<PrivateRoute />}>
            <Route path='/tickets' element={<Tickets />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
      <Route path='/not-found' element={<NotFround />}
    </Router>
  );
}

export default App;
