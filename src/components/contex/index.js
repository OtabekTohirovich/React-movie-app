import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  data: [],
  term: "",
  filter: "all",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_DELETE":
      const dleteArr = state.data.filter((c) => c.id !== payload);
      return { ...state, data: dleteArr };
    case "ONTOGGLE":
        const {id, prop} = payload
        const toogleArr = state.data.map((item) => {
            if (item.id === id) {
              return { ...item, [prop]: !item[prop] };
            }
            return item;
          });
          return { ...state, data: toogleArr}

    case "AddMovie":
        const {name, viewers} = payload
        const newItem = {
            name,
            viewers,
            favourite: false,
            like: false,
            id: uuidv4(),
          };
          return { ...state, data: [ ...state.data, newItem]}
    case 'updateTermHandler':
        return { ...state, term: payload}
    case 'onfiltr':
        return { ...state, filter: payload}
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
