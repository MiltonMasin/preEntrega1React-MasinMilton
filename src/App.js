import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListCcntainer/ItemListContainer';
function App() {
  return (
    <div>
     <Navbar />
     <ItemListContainer greeting="Bienvenidos a Nuestra tienda de Barberia"/>
    </div>
  );
}

export default App;
