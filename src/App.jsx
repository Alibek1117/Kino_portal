import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Movie from './pages/Movie';
import People from './pages/People';
import SinglePeople from './pages/SinglePeople';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:id" element={<SingleMovie />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/people" element={<People />} />
          <Route path="/movie-single/:id" element={<SingleMovie />} />
          <Route path="/people-single/:id" element={<SinglePeople />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
