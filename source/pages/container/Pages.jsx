import React from 'react';
import {Match,Miss,Link,} from 'react-router';

//match en cada ruta 
//miss para los 404
//link para moverme entre rutas


import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';


function Pages() {
  return (
    <main role="application">
      
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      
      <Match
        pattern="/about"
        exactly
        component={About}
      
      />
      
      <Miss component={Error404}
      
      />
    </main>
  )
}

export default Pages;