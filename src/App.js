import logo from './logo.svg';
//import './App.css';
import {hemlu } from './jsrefresher';
import {obj1,obj2} from './jsrefresher' ;
//import content from "./materialcard";
//import BasicCard from "./materialcard";
import {cardview,images} from "./login";
import './logincss.css';
import './newapp.css';


function App() {
  let mystringtobedisplayed="this is a string inside a variable .you wanna learn react? click me you noob";
  return (
    <div className="App">
      <header className="App-header">


        {/*}  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {mystringtobedisplayed}

        </a>
        {hemlu()}
        {obj1.text}
        {obj2.text}
        */}
          {cardview()}


      </header>




    </div>
  );
}

export default App;
