import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import 'tw-elements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';



<React.StrictMode> 
<AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
  </AuthProvider>
</React.StrictMode>


ReactDOM.render(<App />, document.getElementById('root'));