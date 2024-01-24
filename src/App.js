import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importez les composants que vous souhaitez utiliser dans les itinéraires
import LoginSignup from './LoginSignup/LoginSignup';
import Welcome from './Compoents/Welcome';

const App = () => {
  return (
   

    <Router>
        
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="signe" element={< LoginSignup />} />
        
        {/* Ajoutez d'autres itinéraires selon vos besoins */}
      </Routes>
    </Router>
  );
};

export default App;
