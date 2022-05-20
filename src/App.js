import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Mount" element={<Mounting/>}/>
      <Route path="/Update" element={<Updating/>}/>
      <Route path="/Unmount" element={<Unmounting/>}/>
    </Routes>

    </>
  );
}

export default App;
