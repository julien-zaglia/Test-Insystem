import Header from './components/Header';
import List from './components/List';
import './App.css';
import Footer from './components/Footer';


function App() {

  return (
    <div >
      <Header/>
      
      <div className='container'><List /></div>
      <Footer/>
    </div>
  );
}

export default App;
