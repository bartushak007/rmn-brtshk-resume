import React from 'react';

import Header from '../header';
import Footer from '../footer';

import './style/template.scss'

function Template({children}) {
  return (
    <main>
      <Header/>
        {children}
      <Footer/>
    </main>
  );
}

export default Template;
