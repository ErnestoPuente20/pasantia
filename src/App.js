import logo from './logo.svg';
import './App.css';

//ANT DESIGN
import 'antd/dist/antd.css';

import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <section className = "componente">
          <Login />
        </section>
      </header>
      
    </div>
  );
}

export default App;
