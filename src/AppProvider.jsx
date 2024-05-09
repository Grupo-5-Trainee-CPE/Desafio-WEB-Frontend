import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';

function App() {
  return (
    <React.StrictMode>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <h1>CPE</h1>
        <h1>Grupo 05</h1>
        {}
      </div>
      <GlobalStyles />
    </React.StrictMode>
  );
}

export default App;
