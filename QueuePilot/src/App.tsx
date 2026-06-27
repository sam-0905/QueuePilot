// import { useState } from 'react'

import { Routes ,Route } from 'react-router-dom';
import './App.css'
import Inbox from './Pages/inbox';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
    </>
  )
}

export default App;
