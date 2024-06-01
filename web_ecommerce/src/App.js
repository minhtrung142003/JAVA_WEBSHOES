
import './App.css';
import './assets/css/plugins.css'
import './assets/css/style.css'
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.post('http://localhost:8080/api/visitors/increment')
      .catch(error => {
        console.error('Error incrementing visitors count:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
