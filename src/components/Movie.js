import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{`${title} (${year})`}</Link>
      </h2>
      <p>{summary}</p>
      <span>{genres.map((g) => `#${g} `)}</span>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
