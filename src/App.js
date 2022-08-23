import Header  from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>

     
    </div>
  );
}

export default App;
