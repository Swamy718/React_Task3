import logo from './logo.svg';
import './App.css';
import Word_count from './components/Word_count';
// import Color_picker from './components/Color_picker';
// import Dummy_data from './components/Dummy_data';
import Age_calculator from './components/Age_calculator';

function App() {
  const arr=["red","lawngreen","blue","yellow","fuchsia","skyblue","coral","darkmagenta","pink","green","orangered","deepskyblue","brown","lightcoral","darkcyan","goldenrod"]
  return (
    <div className="App">
       {/* <Color_picker color={arr}/> */}
       {/* <Dummy_data/> */}
       <Age_calculator/>
    </div>
  );
}

export default App;
