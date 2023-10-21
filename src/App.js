import logo from './logo.svg';
import './App.css';
import Color_picker from './components/Color_picker';

function App() {
  const arr=["red","lawngreen","blue","yellow","fuchsia","skyblue","coral","darkmagenta","pink","green","orangered","deepskyblue","brown","lightcoral","darkcyan","goldenrod"]
  return (
    <div className="App">
       <Color_picker color={arr}/> 
    </div>
  );
}

export default App;
