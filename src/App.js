import Header  from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Products/>

     
    </div>
  );
}

export default App;
