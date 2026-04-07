import Rating from './components/Rating/Rating';
import Button from './components/Button/Button';
import './ProductDetail.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function ProductDetail({ product, onBack = () => {}, onAddToCart = () => {} }) {
  if (!product) {
    return (
      <main className="product-detail">
        <button className="back-button" onClick={onBack}>← Atpakaļ</button>
        <p>Produkts nav atrasts.</p>
      </main>
    );
  }

  const { title, image, price, description, category, rating, stock } = product;
  const ratingValue = typeof rating === 'number' ? rating : rating?.rate ?? 0;
  const inStock = stock === undefined || stock > 0;

  return (
    <main className="product-detail">
      <button className="back-button" onClick={onBack}>← Atpakaļ uz produktiem</button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={image} alt={title} />
        </div>

        <div className="detail-info">
          <span className="detail-category">{category}</span>
          <h1 className="detail-title">{title}</h1>

          <div className="detail-rating">
            <Rating rate={ratingValue} />
          </div>

          <div className="detail-price">
            <span className="current-price">{currencyFormatter.format(price)}</span>
          </div>

          <p className="detail-description">{description}</p>

          <Button onClick={onAddToCart} disabled={!inStock}>
            {inStock ? 'Pievienot grozam' : 'Nav pieejams'}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
