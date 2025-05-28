import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from "./components/Banner/Banner.jsx"

function App() {
  return (
    <>
      <Banner variant="error">
      </Banner>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
