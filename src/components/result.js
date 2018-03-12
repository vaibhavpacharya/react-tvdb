import React from "react";

class Result extends React.Component{
  render(){
    return(
      <div>
        { this.props.name && this.props.summary &&
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-3 img-container ">
                  {
                    this.props.image && <img
                      class="img-responsive" src={this.props.image} id="tv-summary-img"
                    />
                  }
                    <br />
                </div>
                <div className="col-md-5 info-container">
                  { this.props.name && <h1>{ this.props.name }</h1> }
                  { this.props.summary && <p>{ this.props.summary }</p> }
                  <br />
                   <h2 className="heading heading--3">More Info</h2>
                   <br />
                   <br />
                   <br /> 
                   <ul>
                     <li>
                        <a href= 'https://www.imdb.com/' className="details__more-link" target="_blank" rel="nofollow">Check out {this.props.name} on IMDb! <span role="img" aria-label=", opens third-party website in new window">👉</span></a>
                     </li>
                     <li>
                        <a href='https://www.youtube.com/' className="details__more-link" target="_blank" rel="nofollow">Find out what YouTube has available for {this.props.name} <span role="img" aria-label=", opens third-party website in new window">📺</span></a>
                     </li>
                   </ul>
                </div>
                <div className="col-md-4">
                  { this.props.network && <div>
                    <h1>Show Info</h1>
                    <strong>Airs on: </strong><span>{this.props.network}</span>
                  </div>
                  }
                  {
                    this.props.language && <div>
                      <strong>Language: </strong><span>{this.props.language}</span>
                    </div>
                  }
                  {
                    this.props.time && this.props.days && this.props.runtime && <div>
                      <strong>Schedule: </strong><span>{this.props.days}s at {this.props.time} ({this.props.runtime}min)</span>
                    </div>
                  }
                  {
                    this.props.status && <div>
                      <strong>Status: </strong><span>{this.props.status}</span>
                    </div>
                  }
                  {
                    this.props.type && <div>
                      <strong>Show Type: </strong><span>{this.props.type}</span>
                    </div>
                  }
                  {
                    this.props.genreList && <div>
                      <strong>Genres: </strong><span>{this.props.genreList}</span>
                    </div>
                  }
                  {
                    this.props.premier && <div>
                      <strong>Premier: </strong><span>{this.props.premier}</span>
                    </div>
                  }
                  {
                    this.props.rating && <div>
                      <strong>Rating :</strong><span>{this.props.rating}/10</span>
                    </div>
                  }
                  {
                    this.props.site && <div>
                      <strong>Official site: </strong><span>{this.props.site}</span>
                    </div>
                  }
                  {
                    this.props.tvmazelink && <div>
                      <strong>TVmaze: </strong><span>{this.props.tvmazelink}</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
       </div>
     }
      </div>
    );
  }
}

export default Result;
