import './Star.css';

function Star({ filled = false }) {
  return <span className={`star ${filled ? 'filled' : 'empty'}`}>★</span>;
}

export default Star;
