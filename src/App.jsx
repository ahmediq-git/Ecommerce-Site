import React, { lazy, Suspense } from 'react';
import Landing from './pages/Landing/Landing'
import ErrorPage from './pages/error-boundary/ErrorPage'

function App() {
  return (
    <div className="App">
      <ErrorPage/>
    </div>
  );
}

export default App;