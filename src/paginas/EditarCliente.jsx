import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Formulario from '../components/Formulario'


const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(() => {        
      const obtenerClientesAPI = async () => {
          try {
              const url = `http://localhost:4000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado);
          } catch (error) {
              console.log(error);
          }
          setCargando(!cargando)            
      }
      obtenerClientesAPI()
  }, [])    

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este Formulario para Editar datos de un Cliente</p>

      {cliente?.nombre ? (
        <Formulario 
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p>Cliente no Válido</p>}

    </>
  )
}

export default EditarCliente