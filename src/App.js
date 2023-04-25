import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './jsx/Header';
import Home from './jsx/Home';
import Escocia from './jsx/Escocia';
import GrandCanyon from './jsx/GrandCanyon';
import China from './jsx/China';
import Aruba from './jsx/Aruba';
import Rodape from './jsx/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Escocia' element={<Escocia/>}/>
          <Route path='/GrandCanyon' element={<GrandCanyon/>}/>
          <Route path='/China' element={<China/>}/>
          <Route path='/Aruba' element={<Aruba/>}/>
        </Routes>

        <Rodape/>
      </Router>
    </div>
  );
}

export default App;
