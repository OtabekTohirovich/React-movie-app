import "./movie-add.css";
import { useState ,useContext} from "react";
import { Context } from "../contex";
// Fragment

const MovieAdd = () => {
  const [state,  setState] = useState({name: '', viewers: ''})
  const { _, dispatch } = useContext(Context)


  const changeHandler = e =>{
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const addformhandler = e =>{
    e.preventDefault()
    const data = { name: state.name, viewers: state.viewers }
    dispatch({type: 'AddMovie', payload: data})
    setState({ name: '', viewers: '' })
  }

  const {name, viewers} = state
  return (
    <div className="movie-add">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addformhandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino ?"
          onChange={changeHandler}
          name="name"
          value={name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba Ko'rilgan ?"
          onChange={changeHandler}
          name="viewers"
          value={viewers}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );

}

export default MovieAdd;

// Component
// class MovieAdds extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { name: "", viewers: "" };
//   // }
//   // changeHandler = e =>{
//   //   this.setState({
//   //     [e.target.name]: e.target.value,
//   //   })

//   // }
//   // addformhandler = e =>{
//   //   e.preventDefault()
//   //   this.props.addForm({name: this.state.name, viewers: this.state.viewers})
//   //   this.setState({ name: "", viewers: "" });
//   // }
//   render() {
//     const {name, viewers} = this.state
//     return (
//       <div className="movie-add">
//         <h3>Yangi kino qo'shish</h3>
//         <form className="add-form d-flex" onSubmit={this.addformhandler}>
//           <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Qanday kino ?"
//             onChange={this.changeHandler}
//             name="name"
//             value={name}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Nechi marotaba Ko'rilgan ?"
//             onChange={this.changeHandler}
//             name="viewers"
//             value={viewers}
//           />
//           <button type="submit" className="btn btn-outline-dark">
//             Qo'shish
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// this.state = { name: "+998(90)", views: "" };