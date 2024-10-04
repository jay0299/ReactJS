import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = ({
  title,
  coverImg,
  year,
  description,
  genres,
  rating,
  runtime,
}) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{`${title} (${year})`}</h1>
      <h3>
        {genres.map((g) => `#${g} `)} ⭐{rating} 🎬{runtime}
      </h3>
      <p>{description}</p>
    </div>
  );
};

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          title={detail.title}
          coverImg={detail.medium_cover_image}
          year={detail.year}
          description={detail.description_intro}
          genres={detail.genres}
          rating={detail.rating}
          runtime={detail.runtime}
        />
      )}
    </div>
  );
};

export default Detail;
