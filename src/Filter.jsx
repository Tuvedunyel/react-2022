import { useEffect } from "react";

function Filter(props) {
  useEffect(() => {
    if (props.activeGenre === 0) {
      props.setFiltered(props.popular);
      return;
    }
    const filtered = props.popular.filter(movie =>
      movie.genre_ids.includes(props.activeGenre)
    );
    props.setFiltered(filtered);
  }, [props.activeGenre]);

  return (
    <div className='filter-container'>
      <button
        className={props.activeGenre === 0 ? "active" : "" }
        onClick={() => props.setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={props.activeGenre === 35 ? "active" : "" }
        onClick={() => props.setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={props.activeGenre === 28 ? "active" : ''}
        onClick={() => props.setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
