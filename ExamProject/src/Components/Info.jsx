/* eslint-disable react/prop-types */
const Info = ({ name, address, number }) => {
  return (
    <div className="infoBox">
      <h2>Nombre:</h2>
      <p>{name}</p>
      <h2>Direccion:</h2>
      <p>{address}</p>
      <h2>Numero de contacto:</h2>
      <p>{number}</p>
    </div>
  )
}

export default Info
