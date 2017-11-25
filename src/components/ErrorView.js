import React from 'react'

const ErrorView = ({ message, onClick }) => (
  <div>
    <h2>{message}</h2>
    <button onClick={onClick}>Search Again</button>
  </div>
)

export default ErrorView
