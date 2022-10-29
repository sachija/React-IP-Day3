// import logo from './logo.svg';
import './App.css';
import Width from './components/Width';
import UseState from './components/UseState';
import Theory from './components/Theory';
import UseReducer from './components/UseReducer';

function App() {
  return (
    <div className="App">
      {/* <Width/> */}
      <UseState/>
      <Theory></Theory>
      <UseReducer></UseReducer>
    </div>
  );
}

export default App;
