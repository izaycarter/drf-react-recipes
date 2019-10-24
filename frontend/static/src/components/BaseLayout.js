import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

function BaseLayout(props) {
  return (
    <div >
        <Header />
        {props.children}
        <Footer />
    </div>
  );
}

export default BaseLayout;
