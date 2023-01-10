import "./movie-list.css";

import MovielistItem from "../movie-list-item/movielist-item";
const MovieList = ({ data, onDelete, onTogglelike, onToggleFav }) => {
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovielistItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleFav={() => onToggleFav(item.id)}
          onTogglelike={() => onTogglelike(item.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
// <MovielistItem {...item}/>
