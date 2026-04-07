import './Header.css';

function Header({ cartCount = 0 }) {
  return (
    <header className="header">
      <div className="logo">🛒</div>
      <h1 className="title">FakeStore</h1>
      <div className="cart">
        🛍️ Grozs
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </header>
  );
}

export default Header;
