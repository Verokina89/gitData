import { useSelector } from 'react-redux';

export function Datos() {
  const { name, username, followers, publicRepos, image, email, location } = useSelector((state) => state.user);

  return (
    <>
      <h2>Datos del Usuario</h2>
      <h3>@{username}</h3>
      <p>Nombre de usuario: {name}</p>
      <p>Email: {email}</p>
      <p>Seguidores: {followers}</p>
      <p>Repositorios públicos: {publicRepos}</p>
      <img src={image} alt={`${name || 'Usuario'}`} style={{ width: '100px', height:'100px' }} />
    </>
  );
}
