import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Demo from './assets/Demo.jsx'
import MyComponent from './MyComponent.jsx'
import Button from './Button.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Demo />
    {/* <MyComponent />
    <MyComponent />
    */}
  <Button />
  </React.StrictMode>,
)
