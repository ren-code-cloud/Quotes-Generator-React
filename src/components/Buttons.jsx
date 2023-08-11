import { FaCopy, FaMusic } from 'react-icons/fa';
import '../styles/Buttons.css'

const Buttons = ({ fetchData }) => {
  return (
    <div className="button-field">
      <button className="sound">
        <FaMusic />
      </button>
      <button className="copy">
        <FaCopy />
      </button>
      <button onClick={fetchData} className="generate">
        Generate Quote
      </button>
    </div>
  );
};

export default Buttons;