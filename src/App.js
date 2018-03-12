import React  from "react";
import Header from "./components/header";
import Search from "./components/search";
import Result from "./components/result";
import Footer from "./components/footer";
const ROOT_URL  = "http://api.tvmaze.com";

class App extends React.Component{
    state = {
      name          : undefined,
      language      : undefined,
      genrelist     : [],
      runtime       : undefined,
      premier       : undefined,
      site          : undefined,
      rating        : undefined,
      network       : undefined,
      country       : undefined,
      image         : undefined,
      summary       : undefined,
      tvmazelink    : undefined,
      days          : undefined,
      time          : undefined,
      status        : undefined,
      type          : undefined,
      error         : undefined
    }
  getData = async (e) => {
    e.preventDefault();
    const show          = e.target.elements.search_bar.value;
    const api_call      = await fetch(`${ROOT_URL}/search/shows?q=${show}`);
    const data          = await api_call.json();
    var selectedSerie   = data[0];
    console.log(data);
    // var   selectedSerie = data[0];
    // console.log(selectedSerie);
    this.setState({
      name      : selectedSerie.show.name,
      language  : selectedSerie.show.language,
      genreList : selectedSerie.show.genres.map(genre => {
        return <span key={genre}> | {genre}</span>;
      }),
      runtime   : selectedSerie.show.runtime,
      premier   : selectedSerie.show.premiered,
      site      : selectedSerie.show.officialSite,
      rating    : selectedSerie.show.rating.average,
      network   : selectedSerie.show.network.name,
      country   : selectedSerie.show.network.country.name,
      image     : selectedSerie.show.image.original,
      summary   : selectedSerie.show.summary,
      tvmazelink: selectedSerie.show._links.self.href,
      days      : selectedSerie.show.schedule.days[0],
      time      : selectedSerie.show.schedule.time,
      type      : selectedSerie.show.type,
      status    : selectedSerie.show.status,
      error     : ""
    });
  }
  render(){
    return(
      <div>
      <Header />
        <Search getData={this.getData} />
        <Result
          name =      {this.state.name}
          language=   {this.state.language}
          genreList=  {this.state.genreList}
          runtime=    {this.state.runtime}
          premier=    {this.state.premier}
          site=       {this.state.site}
          rating=     {this.state.rating}
          network=    {this.state.network}
          country=    {this.state.country}
          image=      {this.state.image}
          summary=    {this.state.summary}
          tvmazelink= {this.state.tvmazelink}
          days=       {this.state.days}
          time=       {this.state.time}
          status=     {this.state.status}
          type=       {this.state.type}
          error=      {this.state.error}
        />
      <Footer />
      </div>
    );
  }
}

export default App;
