import './App.css';

let name = "This React app"
function App() {
  return (
    <div className="App">
      <div className="App-header">
            {name}
            <Demo></Demo>
      </div>
    </div>
    
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">
            Demo
      </div>
    </div>
    
  );
}

export default App;
