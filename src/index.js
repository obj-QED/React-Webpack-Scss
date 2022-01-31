import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// PAGE
const rootElement = document.getElementById('root')

const Index = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, rootElement);