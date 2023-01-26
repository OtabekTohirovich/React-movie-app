import "./search-panel.css";
import { useState, useContext } from "react";
import { Context } from "../contex";

const SearchPanel = () =>{
  const [term, setTerm] = useState('')
  const {state, dispatch} = useContext(Context)


  const valueHandler= e =>{
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({ type: "updateTermHandler", payload: term})
  }
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolar qidirish"
      onChange={valueHandler}
      name="name"
      value={term}
    />
  );
  
}


// class SearchPanels extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: "",
//     };
//   }
//   valueHandler = (e) => {
//     const term = e.target.value.toLowerCase()
//     this.setState({ term })
//     this.props.updateTermHandler(term)
//   };
//   render() {
//     return (
//       <input
//         type="text"
//         className="form-control search-input"
//         placeholder="Kinolar qidirish"
//         onChange={this.valueHandler}
//         name="name"
//         value={this.state.term}
//       />
//     );
//   }
// }

export default SearchPanel;
