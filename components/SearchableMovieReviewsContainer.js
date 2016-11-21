import 'whatwg-fetch'
const { fetch } = require('whatwg-fetch')
const React = require('react')
const MovieReviews = require('./MovieReviews.js')

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  searchMovies() {
    let query = document.findElementById('searchBox').value
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}?api-key=71c69d951e414801b0a472a787877167`).then(res =>{
      return res.json()
    }).then(rev => {
      this.setState({reviews: rev.results})
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <input id='searchBox' className='search-box' />
        <button onClick={this.searchMovies} />
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
module.exports = SearchableMovieReviewsContainer
