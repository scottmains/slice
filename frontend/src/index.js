import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import 'tw-elements';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';



<React.StrictMode> 
<AuthProvider>
    <HashRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </HashRouter>
  </AuthProvider>
</React.StrictMode>


ReactDOM.render(<App />, document.getElementById('root'));