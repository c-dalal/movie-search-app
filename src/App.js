import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
