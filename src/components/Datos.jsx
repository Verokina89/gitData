import { useSelector } from 'react-redux';

export function Datos() {
  const { name, username, followers, publicRepos, image, email, location } = useSelector((state) => state.user);

  return (
    <>
      <h1>Datos del Usuario</h1>
      <h2>@{username}</h2>
      <p>Nombre de usuario: {name}</p>
      <p>Email: {email}</p>
      <p>Seguidores: {followers}</p>
      <p>Repositorios públicos: {publicRepos}</p>
      <img src={image} alt={`${name || 'Usuario'}`} style={{ width: '100px', height:'100px' }} />
    </>
  );
}
