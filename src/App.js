import logo from './logo.svg';
import './App.css';
import ConnectForm from './components/connectform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
          <div className="page">
            <Routes>
              <Route exact path='/' element = {<ConnectForm/>} />
            </Routes>
          </div>
    </Router>
  );
}


export default App;
