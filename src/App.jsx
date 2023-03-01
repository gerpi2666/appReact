import * as React from 'react';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './components/header';

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>App Peliculas</h1>
    </>
  );
}
