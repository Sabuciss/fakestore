import './Button.css';

function Button({
  children = 'Add to Cart',
  variant = 'primary',
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
