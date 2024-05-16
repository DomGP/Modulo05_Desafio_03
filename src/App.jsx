import { Routes, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

//Views
import Home from './Views/Home';
import Pokemones from './Views/Pokemones';
import Detalle from './Views/Detalle';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}/>
        <Route
          path='/pokemones'
          element={<Pokemones/>}/>
        <Route
          path='/pokemon/:name'
          element={<Detalle/>}/>
      </Routes>
    </div>
  )
}

export default App
