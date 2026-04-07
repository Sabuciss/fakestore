import Star from '../Star/Star';
import './Rating.css';

function Rating({ rate = 0 }) {
  const rating = Math.round(rate);
  const fullStars = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star key={index} filled={index <= fullStars} />
      ))}
      <span className="rating-value">{rate.toFixed(1)}/5</span>
    </div>
  );
}

export default Rating;
