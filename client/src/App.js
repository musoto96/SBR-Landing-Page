import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Principles from './components/Principles';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/principles" component={Principles} />
          <Route path="/values" component={Values} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
