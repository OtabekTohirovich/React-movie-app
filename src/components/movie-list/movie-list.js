import "./movie-list.css";

import MovielistItem from "../movie-list-item/movielist-item";
const MovieList = ({ data, onDelete, onToggleProp}) => {
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
          onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </div>
  );
};

export default MovieList;
// <MovielistItem {...item}/>
