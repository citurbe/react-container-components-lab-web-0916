const React = require('react')

const MovieReviews = ({
      reviews
}) => {
  return (
    <div className='review-list'>
      {reviews.map (review => {
        return (
        <div className='review'>
        <h1>{review.title}</h1>
        <h2>{review.headline}</h2>
        </div>
      )
      }
      )}
    </div>

  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews
