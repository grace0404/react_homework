import "./App.css";
import Effect from "./Effect";
import State from "./State";

function App() {  
  return (
    <div className="App">
     <div className="black-bg"> 
      <h3>멋쟁이사자처럼</h3> 
      </div>
      <div>
       <State></State>
       <Effect></Effect> 
     </div>
    </div>
  );
}

export default App;