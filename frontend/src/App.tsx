import React from 'react';
import './App.css';
import TablePage from './TablePage';
import EditPage from './EditPage';
import DeletePage from './DeletePage';
import AddPage from './AddPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TablePage/>}/>
      <Route path="/edit" element={<EditPage />}/>
      <Route path="/delete" element={<DeletePage/>}/>
      <Route path ="/add" element={<AddPage/>}/>
    </Routes>
    


  );
}

export default App;
