import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Create from './Create';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;