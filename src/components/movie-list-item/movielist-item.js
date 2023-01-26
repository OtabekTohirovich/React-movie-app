import { useContext } from "react";
import { Context } from "../contex";
import "./movielist-item.css";
// import { Component } from "react";

// class MovielistItem extends Component{
//   // onFavorite =() =>{
//   //   this.setState(({favourite})=>({
//   //     favourite: !favourite
//   //   }))

//   // }
//   // addLike =() =>{
//   //   this.setState(({like})=>({
//   //     like: !like
//   //   }))

//   // }

//   render() {
//     const {name, viewers, onDelete, onToggleProp, favourite, like} = this.props
//     return (
//       <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
//         <span className="list-group-item-label"  onClick={onToggleProp} data-toggle='like'>{name}</span>
//         <input
//           type="number"
//           className="list-group-item-input"
//           defaultValue={viewers}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button type="button" className="btn-cookie btn-sm" data-toggle='favourite' onClick={onToggleProp}>
//               <i className="fas fa-cookie"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
//               <i className="fas fa-trash"></i>
//           </button>
//               <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

const MovielistItem = props => {
  const {name, viewers, favourite, like, id} = props

  const {state, dispatch} = useContext(Context)
  const onToggleProp = (e) =>{
    const payload= {
      id,
      prop: e.currentTarget.getAttribute('data-toggle')
    }
    dispatch({ type: 'ONTOGGLE', payload})
  }

  const onDelete = ()=>{
    dispatch({type: 'ON_DELETE', payload: id})
  }

  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
      <span className="list-group-item-label"  onClick={onToggleProp} data-toggle='like'>{name}</span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm" data-toggle='favourite' onClick={onToggleProp}>
            <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
        </button>
            <i className="fas fa-star"></i>
      </div>
    </li>
  );
  
};

export default MovielistItem;
