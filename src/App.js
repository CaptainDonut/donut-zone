import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

//Routing for app
function App() {
return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
</BrowserRouter>

);
}

export default App;