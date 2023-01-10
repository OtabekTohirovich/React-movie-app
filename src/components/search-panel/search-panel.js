import "./search-panel.css";
import { Component } from "react";
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  valueHandler = (e) => {
    const term = e.target.value.toLowerCase()
    this.setState({ term })
    this.props.updateTermHandler(term)
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolar qidirish"
        onChange={this.valueHandler}
        name="name"
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
