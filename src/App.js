import './App.css';
import Mytooltip from './component/Color';


function App() {
  const position = 'right';
  return (
    <div className="App">
      <Mytooltip pos={position}/>
    </div>
  );
}

export default App;
