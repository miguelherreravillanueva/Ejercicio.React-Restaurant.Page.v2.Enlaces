import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Reserve from './components/Reserve/Reserve';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'

const dishes = [
  {
    id:1,
    name:'Linguini',
    description:'Linguini arrabbiata',
    price:10
  },
  {
    id:2,
    name:'Tagliatelle',
    description:'Tagliatelle al pesto',
    price:20
  },
  {
    id:3,
    name:'Lasagna',
    description:'Lasagna ragù',
    price:15
  }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/menu" element={<Menu dishes={dishes}/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
