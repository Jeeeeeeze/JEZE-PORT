import React from 'react';
import YostarMockup from './pages/YostarMockup';
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Fanart from './pages/Fanart';
import Contact from './pages/Contact';
import Star from './pages/Star';
import Wuwa from './pages/Wuwa';
import Azurlane from './pages/Azurlane';
import Original from './pages/Original';


import { HashRouter } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <HashRouter >
        <Routes>
          <Route index element ={<YostarMockup/>}/>
          <Route path="/YostarMockup" element={<YostarMockup/>}/>
          <Route path="/Page2" element={<Page2/>}/>
          <Route path="/Page3" element={<Page3/>}/>
          <Route path="/Fanart" element={<Fanart/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Star" element={<Star/>}/>
          <Route path="/Wuwa" element={<Wuwa/>}/>
          <Route path="/Azurlane" element={<Azurlane/>}/>
          <Route path="/Original" element={<Original/>}/>

        </Routes>
      </HashRouter>
  );
}

export default App;