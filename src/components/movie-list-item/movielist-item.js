import "./movielist-item.css";
import { Component } from "react";

class MovielistItem extends Component{
  // onFavorite =() =>{
  //   this.setState(({favourite})=>({
  //     favourite: !favourite
  //   }))

  // }
  // addLike =() =>{
  //   this.setState(({like})=>({
  //     like: !like
  //   }))

  // }

  render() {
    const {name, viewers, onDelete, onTogglelike, onToggleFav, favourite, like} = this.props
    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
        <span className="list-group-item-label"  onClick={onTogglelike}>{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm" onClick={onToggleFav}>
              <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
              <i className="fas fa-trash"></i>
          </button>
              <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// const MovielistItem = () => {
//   console.log(favourite);
  
// };

export default MovielistItem;
