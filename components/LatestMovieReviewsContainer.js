import 'whatwg-fetch'
const { fetch } = require('whatwg-fetch')
const React = require('react')
const MovieReviews = require('./MovieReviews.js')

class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      reviews: []
    }

    this.getMovies = this.getMovies.bind(this)
  }
  componentWillMount() {
    this.getMovies();
  }
  getMovies() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=71c69d951e414801b0a472a787877167').then(res =>{
      return res.json()
    }).then(rev => {
      this.setState({reviews: rev.results})
    })
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
      <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}
module.exports = LatestMovieReviewsContainer
