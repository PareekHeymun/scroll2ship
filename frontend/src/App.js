
import './App.css';
import logo from './scroll2ship_logo.jpg';
import AppRouter from './AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <header className="App-header" style={{background: '#282c34', color: 'white', padding: '2rem 0'}}>
            <img src={logo} alt="scroll2ship logo" style={{height: '80px', marginBottom: '1rem'}} />
            <h1 style={{fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0.5rem'}}>scroll2ship</h1>
            <p style={{fontSize: '1.2rem'}}>Your one-stop ecommerce platform</p>
          </header>
          <Navigation />
          <main style={{maxWidth: '900px', margin: '2rem auto', padding: '1rem'}}>
            <AppRouter />
          </main>
          <footer style={{textAlign: 'center', padding: '1rem', background: '#282c34', color: 'white'}}>
            <p>&copy; 2025 scroll2ship. All rights reserved.</p>
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
