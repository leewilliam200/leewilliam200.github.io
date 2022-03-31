import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/homeScreen';
import { WordleBot } from './components/wordleBot';
import { Prodiff } from './components/prodiff';
import { Promedmail } from './components/promedmail';
import { Transportme } from './components/transportme';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/project/wordleBot" element={<WordleBot/>} />
          <Route exact path="/project/prodiff" element={<Prodiff/>} />
          <Route exact path="/project/promedmail" element={<Promedmail/>} />
          <Route exact path="/project/transportme" element={<Transportme/>} />
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
