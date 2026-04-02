import './ProductCard.css';

function ProductCard({ id, title, price, description, category, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductCard;