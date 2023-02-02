import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/header'
import ListadoPacientes from './components/ListadoPacientes'

function App () {
  const [packages, setPackages] = useState([])
  const [pack, setPack] = useState({})
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPackages(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(packages))
  }, [packages])
  return (
    <div className='flex flex-col items-center gap-9 mt-9'>
      <Header />
      <div className='flex flex-col min-[1120px]:flex-row max-[1120px]:gap-8 max-[1120px]:items-center  justify-evenly w-[100vw] '>
        <Formulario
          packages={packages}
          setPackages={setPackages}
          pack={pack}
          setPack={setPack}
        />
        <ListadoPacientes
          packages={packages}
          setPackages={setPackages}
          setPack={setPack}
        />
      </div>
    </div>
  )
}

export default App
