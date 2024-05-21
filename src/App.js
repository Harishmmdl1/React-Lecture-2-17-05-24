import logo from './logo.svg';
import './App.css';
import Hari  from './importExport';
import ClassComp from './ClassComp';
import FunctionComp from './functionalComp';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div >
      {/* <p> Getting values using Import which was exported with export keyword from importExport file </p>
      {/* <p> The i value is - {Hari} </p> */}
      {/* <p> Calling Hari Method please check in console {Hari()} </p> */}


      {/* <ClassComp />
      <ClassComp />
      <FunctionComp /> */}

      <h1>This is App file</h1>

      <Header />
      <Main />


    </div>
  );
}

export default App;
