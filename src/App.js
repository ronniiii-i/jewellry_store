import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TnC from './pages/T&C'
import Privacy from './pages/Privacy'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/terms&conditions" element={<TnC />} />
            <Route exact path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Router>
      <Footer />    
    </div>
  );
}

export default App;
