import './App.css';
import Header from './components/Header'

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/management" component={Management} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  );
}

export default App;
