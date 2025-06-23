import React from 'react';
import ReactDOM from 'react-dom/client';

import Banner from "./components/Banner/Banner.jsx"
import Badge from "./components/Badge/Badge.jsx"
import Menu from "./components/Menu/index.js"
import Star from "./components/Star.jsx"

function App() {
  return (
    <>
      <Banner variant="error">
      </Banner>
      <br/>
      <Banner variant="success">
      </Banner>
      <br/>
      <Badge variant='square' color='indigo'>

      </Badge>

      <br/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
