import * as api from '../api';

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    // Dentro do fetch temos o response, e dentro do response temos o data
    const { data } = await api.fetchPosts();

    // Manda as inforcões do back end
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }

  // Essa seria a action a ser despachada, porem queremos as info do banco de dados
  // const action = { type: 'FETCH_ALL', payload: [] }
   // dispatch(action);
}

