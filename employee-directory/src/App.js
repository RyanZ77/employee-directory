import React from 'react';
import logo from './logo.svg';
import DataTable from './components/DataTable';
import Search from './components/Search'
import './App.css';


function App() {
  return (
  <div class="jumbotron jumbotron-fluid ">
      <div class="display">
      <h1 class="display-3">Employee-Directory</h1>
      <p class="lead">Sample text</p>
      </div> 
      <Search />
      <DataTable />
  </div>
  );
}

export default App;
