import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SharedLayout from './components/shared_layout';
import Home from './components/home';
import Write from './components/write'
import Drafts from './components/drafts'
import uuid from 'react-uuid';

function App() {

  const [listOfBlogs, setListOfBlogs] = useState([{}])
  

  return (
    <div className='App-header'>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home listOfBlogs = {listOfBlogs}  />} />
              <Route path='write' element={<Write listOfBlogs = {listOfBlogs} setListOfBlogs = {setListOfBlogs} />} />
              <Route path='drafts' element={<Drafts />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
