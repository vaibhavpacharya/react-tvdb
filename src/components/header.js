import React from "react";
let imgUrl  = '.public/images/tvs.jpg';

/**
 * Header.js
 *
 * This renders the header of the site, mainly just the logo which links
 * back to the homepage to conduct a new search.
 */

class Header extends React.Component{
  render(){
    const headerStyles = {
      background: `#000 url(${process.env.PUBLIC_URL}/images/tvs.jpg) no-repeat`,
      backgroundSize: 'cover'
  };
    return(
        <div className="container" style={headerStyles} id="header-top">
          <header className="logo">popcorn-TV</header>
        </div>
    );
  }
};

export default Header;
