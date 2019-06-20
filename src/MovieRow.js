import React from 'react'

class MovieRow extends React.Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <div style={{paddingTop:"10", paddingBottom:"10", width:"900px",margin: "auto",position: "",top: "0", left:"0", bottom:" 0", right: "0", height:"300px"}}><table key={this.props.movie.id}>
            <tbody >
                <tr>
                    <td>
                        <img alt="poster" width="150" src={this.props.movie.poster_src} />
                    </td>
                    <td style={{top:"0"}}>
                        <h1>{this.props.movie.title}</h1>
                        <h3>{this.props.movie.overview}</h3>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
                        <input className="button" type="button" value="Beli" />

                    </td>
                </tr>
            </tbody>
        </table>
        </div>

}
}

    export default MovieRow