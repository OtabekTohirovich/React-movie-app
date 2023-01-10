import "./app-filter.css";
const AppFilter = ({ filterUpdate, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => filterUpdate(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashxur kinolar" },
  { name: "mostviever", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
/* <button className="btn btn-dark" type="button">
        Barcha kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Mashxur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Eng ko'p ko'rilgan kinolar
      </button> */
