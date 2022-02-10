const reducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload; //  Os posts que estao na DataBase do mongo
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}

export default reducer;