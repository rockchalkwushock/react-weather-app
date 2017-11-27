import React from 'react'
import { GridLoader as Loader } from 'halogenium'

const LoadingView = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center'
    }}
  >
    <Loader color="#fff59d" size="50px" margin="4px" />
  </div>
)

export default LoadingView
