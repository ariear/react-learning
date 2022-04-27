import './App.css';
import Home from './views/Home';
import LearnState from './views/LearnState';
import List from './views/List'
import About from './views/About';
import Nested from './views/Nested';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import NotFound from './views/NotFound'
import ContextGaul from './views/ContextGaul';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learnstate" element={<LearnState />} />
      <Route path="/contextgaul" element={<ContextGaul />} />
      <Route path='/list' element={<List />} />
      <Route path='/about' element={<About />}>
        <Route path='nested' element={<Nested />} />
      </Route>
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:article' element={<DetailBlog />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
