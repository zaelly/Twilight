import { Link } from 'react-router-dom';
import './index.css';

const SearchList = ({ results }) => {
  return (
    <div className='container-search'>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link to={`/onmation/assistirOnline/${result.id}`} className="container-list">
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
