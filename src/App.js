import './App.css';
import Home from "./pages/Home"
import LocomotiveScroll from 'locomotive-scroll';
function App() {
 

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
