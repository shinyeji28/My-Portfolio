import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/page/Home';

function App() {
  return (
    <div>
      <Header/>
      <div class="home-wraper">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
