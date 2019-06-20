import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = {}
    // const movies = [
    //   { id: 0, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avenger : Infinity War", overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." },
    //   { id: 1, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/bJLYrLIHT1r7cikhWGbpZkxlUpA.jpg", title: "Avenger : End Game", overview: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan." },
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie}  /> 
    //   movieRows.push(movieRow)
    // })

    // this.state = { rows: movieRows }

    this.performSearch("marvel")
  }

  performSearch(searchTerm){
    console.log("perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +searchTerm
    $.ajax({
      url: urlString,
      success: (searchResult) => {
        console.log("Fetched data successfully")
        const results = searchResult.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }
 
  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)

  }
   
  render() {
    return (
      <div style={{width:"900px",margin: "auto",position: "",top: "0", left:"0", bottom:" 0", right: "0",height: "300px"}}>
        <table className="titleBar">
          <tbody  style={{paddingBottom:"50"}}>
            <tr>
            
              
              <td>
                <h1>Pencarian Film</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          width: "100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 18
          

        }} onChange={this.searchChangeHandler.bind(this)} placeholder="cari film" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
