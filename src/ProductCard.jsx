import Rating from './components/Rating/Rating';
import Button from './components/Button/Button';
import './ProductCard.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function ProductCard({ title, price, description, category, image, rating, stock, onSelect = () => {}, onAddToCart = () => {} }) {
  const shortDescription =
    description.length > 118 ? `${description.slice(0, 115).trim()}...` : description;
  const ratingValue = typeof rating === 'number' ? rating : rating?.rate ?? 0;
  const inStock = stock === undefined || stock > 0;

  return (
    <div className="product-card" onClick={onSelect} style={{ cursor: 'pointer' }}>
      <div className="product-image-wrap">
        <img src={image} alt={title} className="product-image" />
      </div>
      <span className="product-category">{category}</span>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{shortDescription}</p>

      <div className="product-rating">
        <Rating rate={ratingValue} />
      </div>

      <div className="product-meta">
        <strong>{currencyFormatter.format(price)}</strong>
        <span className="stock-info">
          {stock > 0 ? `Noliktavā: ${stock} gab.` : 'Izpārdots'}
        </span>
      </div>

      <Button
        onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
        disabled={!inStock}
      >
        {inStock ? 'Pievienot grozam' : 'Nav pieejams'}
      </Button>
    </div>
  );
}

export default ProductCard;