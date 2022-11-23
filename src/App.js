import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Reserve from './components/Reserve/Reserve';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
