import React, { useState } from 'react'
import Message from './Message'
import Info from './Info'

const Form = () => {
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    number: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleChangeName = (event) => {
    setCustomer({ ...customer, name: event.target.value })
  }

  const handleChangeAddress = (event) => {
    setCustomer({ ...customer, address: event.target.value })
  }

  const handleChangeNumber = (event) => {
    setCustomer({ ...customer, number: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let hasError = false

    if (customer.name.length < 3 || customer.name.startsWith(' ')) {
      alert(
        'El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios.'
      )
      hasError = true
    }

    if (customer.address.length < 6) {
      alert('La dirección debe tener al menos 6 caracteres.')
      hasError = true
    }

    const numberPattern = /^[0-9]+$/
    if (!numberPattern.test(customer.number)) {
      alert('El número de contacto solo debe contener números.')
      hasError = true
    }

    if (hasError) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      setShow(true)
      console.log('hola:')
    }
  }

  const handleReset = () => {
    setCustomer({
      name: '',
      address: '',
      number: ''
    })
    setShow(false)
  }

  return (
    <div>
      <h1>REGISTRA TU INFORMACION</h1>
      {error && <Message />}
      <form onSubmit={handleSubmit} className="containerForm">
        <label>Nombre completo: </label>
        <input type="text" value={customer.name} onChange={handleChangeName} />
        <label>Direccion: </label>
        <input
          type="text"
          value={customer.address}
          onChange={handleChangeAddress}
        />
        <label>Numero de contacto: </label>
        <input
          type="text"
          value={customer.number}
          onChange={handleChangeNumber}
        />
        <button>Enviar</button>
        <button type="button" onClick={handleReset}>
          Reiniciar
        </button>
      </form>

      {show && (
        <Info
          name={customer.name}
          address={customer.address}
          number={customer.number}
        />
      )}
    </div>
  )
}

export default Form
