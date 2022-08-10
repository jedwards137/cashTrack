import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
