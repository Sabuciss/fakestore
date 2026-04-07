import './Category.css';

function Category({ name = 'Category', isActive = false, onClick = () => {} }) {
  return (
    <button className={`category-tag ${isActive ? 'active' : ''}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Category;
