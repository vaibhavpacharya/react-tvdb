import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class SearchBar extends React.Component{
  render(){
    return(
      <div className="container">
        <section id="page-header">
          <h1 id="pageTitle" className="heading heading--1 home__title center"><span style={{color: '#fff'}}>Search</span>
            <span className="logo-1">TVMAZE</span>
            for your favourite TV shows!
          </h1>
          <form className="search form-horizontal" onSubmit={this.props.getData}>
            <InputGroup>
                    <Input
                       className="search_input"
                       type="text"
                       name="search_bar"
                       autoComplete='off'
                       placeholder="Your Favourite TV Show..."
                     />
                     <InputGroupAddon
                       addonType="append">
                      <Button
                        className="search__btn"
                        color="secondary">
                        Make&nbsp;It&nbsp;So&nbsp;
                        <span role="img" aria-label="" aria-hidden="true">👉</span>
                      </Button>
                    </InputGroupAddon>
             </InputGroup>
          </form>
          <h2 class="heading heading--2 center">Check out what you're watching!</h2>
        </section>
       </div>
    );
  }
}

export default SearchBar;
