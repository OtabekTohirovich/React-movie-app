import "./app.css";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import MovieAdd from "../movie-add/movie-add";
import MovieList from "../movie-list/movie-list";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { Context } from "../contex";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setfilter] = useState("all");
  const [isLoding, setisLoding] = useState(false);

  const {state, dispatch} = useContext(Context)
  // console.log(dispatch, state);
  // const onDelete = (id) => {
  //   setData(data.filter((c) => c.id !== id));
  // };
  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
      id: uuidv4(),
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };
  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr);
  };
 
  const updateTermHandler = (term) => {
    setTerm(term);
  };
  const filterUpdate = (filter) => {
    setfilter(filter);
  };

  useEffect(() => {
    setisLoding(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=8")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 200,
          favourite: false,
          like: item.completed,
        }));
        console.log(newArr);
        setData(newArr);
        dispatch({type: 'GET_DATA', payload: newArr})
      })
      .catch((err) => console.log(err))
      .finally(() => setisLoding(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo        />
        <div className="search__panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoding && "Loading...."}
        <MovieList />

        <MovieAdd />
      </div>
    </div>
  );
};

export default App;

// const array = [
//   { name: "Empire osman group", viewers: "528", favourite: false, like: false, id: 1 },
//   { name: "Good osman group", viewers: "928", favourite: false,like: false, id: 2 },
//   { name: "Osman group", viewers: "728", favourite: true, like: true, id: 4 },
// ]
// class Apps extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     data: [
//       { name: "Empire osman group", viewers: "528", favourite: false, like: false, id: 1 },
//       { name: "Good osman group", viewers: "928", favourite: false,like: false, id: 2 },
//       { name: "Osman group", viewers: "728", favourite: true, like: true, id: 4 },
//     ],
//     term: '',
//     filter: 'all',
//   };
// }
// onDelete = (id) => {
//   this.setState(({ data }) => {
//     // const index = data.findIndex(c => c.id === id)
//     // data.splice(index, 1) //mutable
//     return {
//       data: data.filter((c) => c.id !== id),
//     };
//   });
// };
// addForm = item =>{
//   console.log(item);
//   this.setState (({data})=>{
//     return {
//       data: [...data, {name: item.name ,viewers: item.viewers,favourite: false, like: false, id: uuidv4()}]
//     }
//   })
// }

// onToggleProp = (id, prop) =>{
//   console.log(prop);
//   this.setState(({data})=>({
//     data: data.map(item =>{
//       if(item.id === id) {
//         return {...item, [prop]: !item[prop]}
//       }
//       return item
//   })
//   }))

// }
// searchHandler = (arr, term) =>{
//   if (term.length === 0) {
//     return arr
//   }
//   return arr.filter(item => item.name.toLowerCase().indexOf(term)> -1)
// }
// filterHandler = (arr, filter) =>{
//   switch(filter) {
//     case 'popular': return arr.filter(data => data.like)
//     case 'mostviever': return arr.filter(data => data.viewers > 600)
//     default :
//       return arr
//   }
// }
// updateTermHandler = (term)=>{
//   this.setState({term})
// }
// filterUpdate = filter =>{
//   this.setState({filter})
// }

// render() {
//   const { data , term, filter } = this.state;
//   const allMovie = data.length
//   const favoriteMovie = data.filter(data => data.favourite).length
//   const visuballeData = this.filterHandler(this.searchHandler(data , term), filter)
//   return (
//     <div className="app font-monospace">
//       <div className="content">
//         <AppInfo allMovie={allMovie} favoriteMovie={favoriteMovie}/>
//         <div className="search__panel">
//           <SearchPanel updateTermHandler={this.updateTermHandler} />
//           <AppFilter filter={filter} filterUpdate={this.filterUpdate}/>
//         </div>
//         <MovieList data={visuballeData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
//         <MovieAdd addForm={this.addForm}/>
//       </div>
//     </div>
//   );
// }
// }

// onTogglelike = id =>{
//   this.setState(({data})=>({
//     data: data.map(item =>{
//       if(item.id === id) {
//         return {...item, like: !item.like}
//       }
//       return item
//     })
//   }))
// }
