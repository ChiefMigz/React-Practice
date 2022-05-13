import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;  