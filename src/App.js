import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Home/navBar';
import {Provider} from 'react-redux';
import {store} from './Actions/store';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
  
      <NavBar/>
    </div>
    </Provider>
  );
}

export default App;
