import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppDevelopment from './Pages/AppDevelopment';
import ITService from './Pages/ITService';
import WebDevelopment from './Pages/WebDevelopment';
import WebDesign from './Pages/WebDesign';
import GraphicDesign from './Pages/GraphicDesign';
import UIUXDesign from './Pages/UIUXDesign';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/services" exact>
              <Services />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/itservice" exact>
              <ITService />
            </Route>
            <Route path="/webdevelopment" exact>
              <WebDevelopment />
            </Route>
            <Route path="/webdesign" exact>
              <WebDesign />
            </Route>
            <Route path="/appdevelopment" exact>
              <AppDevelopment />
            </Route>
            <Route path="/graphicdesign" exact>
              <GraphicDesign />
            </Route>
            <Route path="/uiuxdesign" exact>
              <UIUXDesign />
            </Route>
        </Switch>
        </BrowserRouter>  
    </div>
    
  );
}

export default App;
