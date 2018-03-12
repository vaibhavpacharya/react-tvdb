import React from "react";

/**
 * Footer.js
 *
 * This renders the footer of the site, including static links out to other
 * relavent resources.
 */

class Footer extends React.Component{
  render(){
    return(
      <div className="container">
        <footer className="footer">
          <p><span className="logo-foot">PopCornTV</span> &copy; <a href="https://vaibhavpacharya.github.io" target="_blank" rel="noopener noreferrer">Vaibhav Acharya Inc</a>.<br/>This demo app is based on the article in, <a href="https://simplyaccessible.com/article/react-a11y/" target="_blank" rel="noopener noreferrer">Creating Accessible React Apps</a>. View the <a href="https://github.com/vaibhavpacharya/react-PopCornTV" target="_blank" rel="noopener noreferrer">source on GitHub</a>.<br/>Data, images, and content &copy; <a href="https://tvmaze.com/api" target="_blank" rel="noopener noreferrer">TVMaze.com</a>.</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
