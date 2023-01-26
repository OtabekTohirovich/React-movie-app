const searchHandler = (arr, term) => {
  if (term.length === 0) {
    return arr;
  }
  return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((data) => data.like);
    case "mostviever":
      return arr.filter((data) => data.viewers > 600);
    default:
      return arr;
  }
};

export {searchHandler, filterHandler}
