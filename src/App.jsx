import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, setUser, setError } from './redux/userSlice';


function App({ username }) {
  const dispatch = useDispatch();
  const { name, username: userName, followers, publicRepos, image, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (username) {
      //inicia la carga
      dispatch(startLoading());

      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          //save data of user in el states of Redux
          dispatch(setUser(response.data));
        })
        .catch((error) => {
          // En caso de error, guardar el error en el estado de Redux
          dispatch(setError(error.message));
        });
    }
  }, [dispatch, username]);

  return (
    <>
      <div className='cardUser'>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div>
          <h1>{name}</h1>
          <h2>@{userName}</h2>
          <img src={image} alt="Avatar" width="100" />
          <p>Seguidores: {followers}</p>
          <p>Repositorios públicos: {publicRepos}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default App;