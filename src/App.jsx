import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser  } from './redux/userSlice.js';
import { Datos } from './components/Datos.jsx'
import { Users } from './components/Users.jsx'
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.github.com/users/verokina89')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);

  return (
    <>
    <div className="App"> 
      <h1>Buscador de Usuarios GitHub</h1>
      <Users />
      <Datos />
    </div>
      
    </>
  );
}

export default App;





// import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { addUser, startLoading, setError } from './redux/userSlice';

// function App({ userLogin  }) {
//   const dispatch = useDispatch();
//   const { name, login, followers, publicRepos, image, loading, email, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     if (userLogin) {
//       dispatch(startLoading());

//       axios
//         .get(`https://api.github.com/users/${userLogin}`)
//         .then((response) => {
//           dispatch(addUser(response.data));
//         })
//         .catch((error) => {
        
//           dispatch(setError(error.message || 'Error al obtener los datos del usuario'));
//         });
//     }
//   }, [dispatch, userLogin]);

//   return (
//     <>
//       <div className='cardUser'>
//       {loading && <p>Cargando...</p>}
//       {error && <p>Error: {error}</p>}
//       {!loading && !error && (
//         <div>
//           <h1>{name}</h1>
//           <h2>@{login}</h2>
//           <p>Email: {email}</p>
//           <img src={image} alt="Avatar" width="100" />
//           <p>Seguidores: {followers}</p>
//           <p>Repositorios publicos: {publicRepos}</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }

// export default App;