import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (type, msg) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }

  return (

    <BrowserRouter>

      <Navbar title="WELCOME"  />


      <Alert alert={alert} />
      <div className='container'>
        <Routes>

          <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter Text to Analyze" />} />

          <Route exact path="/About" element={<About />} />

        </Routes>

        <About />


      </div>

      </BrowserRouter>
  );
}

export default App;
