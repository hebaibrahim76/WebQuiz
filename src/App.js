//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Last from './components/Last';
import Test from './components/Test';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact component={Main} />
      <Route path='/last' exact component={Last} />
      <Route path='/test' exact component={Test} />
    </div>
    </Router>
  );
}

export default App;
