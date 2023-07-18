import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import { Shop } from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Shop />
        <Counter />
      </div>
    </>
  );
}

export default App;
