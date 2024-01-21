import './App.css';
import Colordemo from './component/Color';
import ListItem from './component/List';
import Dice from './component/dic'

function App() {
  return (
    <div className="App">
      <h1 style={{color:"Red"}}>Welcom to React</h1>
      {/* <ListItem heading="Item List" /> */}
      <Dice/>
      <Colordemo arr={['red','yellow','pink','brown']}/>
    </div>
  );
}

export default App;
