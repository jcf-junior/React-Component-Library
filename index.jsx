import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge.jsx"

function App() {
  return (
    <>
      <h1>Hello mothasuckas</h1>
      <Badge variant="square" color="INDIGO"></Badge>
      <br></br>
      <Badge variant="pill" color="red"></Badge>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
