import "./movie-list.css";

import MovielistItem from "../movie-list-item/movielist-item";
import { useContext } from "react";
import { Context } from "../contex";
import { filterHandler, searchHandler } from "../utileti/data";

const MovieList = ({ onToggleProp}) => {
  const {state} = useContext(Context)
  const data = filterHandler(searchHandler(state.data, state.term), state.filter)
  console.log(state);
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovielistItem
          key={item.id}
          {...item}
          // name={item.name}
          // viewers={item.viewers}
          // favourite={item.favourite}
          // like={item.like}
          // id={item.id}
          // onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </div>
  );
};

export default MovieList;
// <MovielistItem {...item}/>
