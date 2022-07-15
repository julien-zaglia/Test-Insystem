import Header from './components/Header';
import List from './components/List';
import './App.css';


function App() {

  return (
    <div >
      <Header/>
      {/* <div className='presentation' >Liste de la température des cours d'eau en Gironde:</div> */}
      
      <div className='container'><List /></div>
    </div>
  );
}

export default App;
